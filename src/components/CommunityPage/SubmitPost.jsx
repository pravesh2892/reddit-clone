import React, { useContext, useRef, useState } from 'react'
import { IoDocumentText, IoImageOutline } from "react-icons/io5"
import { getAuthHeaderConfig } from '../../utils/configs';
import AboutCommunity from '../Feed/AboutCommunity';
import { DarkMode } from '../../App';

const SubmitPost = () => {
    const [post, setPost] = useState(true);
    const [images, setImages] = useState(false);
    const { darkMode } = useContext(DarkMode)
    const handlePost = () =>{
        setPost(true);
        setImages(false)
    }
    const handleImages = () => {
        setPost(false);
        setImages(true)
    }
    const [textInputs, setTextInputs] = useState({
        title: '',
        content: ''
     })

     const onChange = (e) =>{
        const {name, value} = e.target;
        setTextInputs((prevState)=> ({...prevState,[name]:value}))
     }
     const [selectedFile, setSelectedFile] = useState();
     const selectFileRef = useRef(null);

     const onSelectFile = (event) => {
       console.log("THIS IS HAPPENING", event);

        if (event.target.files?.[0]) {
        // console.log('url')
            // reader.readAsDataURL(event.target.files[0])
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
       }

    };

     const createPost = async(textInputs, selectedFile) =>{
        const header = getAuthHeaderConfig
        try{
        const res = await fetch("https://academics.newtonschool.co/api/v1/reddit/post/",
        {
            method: "POST",
            body: {
                title: textInputs.title,
                content: textInputs.content,
                images: selectedFile,
            },
            headers: {
                ...header
            }
        }
        )
        const data = await res.json();
        console.log('create post data',data)
    }catch(err){
        console.log(err);
    }
     }

     const handleCreatePost = () =>{
        createPost(...textInputs, selectedFile);
     }
    return (
        <div className="community-body-conatiner">
            <div className='community-body-wrapper' style={{ paddingTop: "50px" }}>
                <div className='body-1' >
                    <div className={`submit-header-${darkMode?"dark":"light"}`} >Create a Post</div>
                    <div className={`submit-body-${darkMode?"dark":"light"}`}>
                        <div style={{ width: "100%", display: "flex" }}>
                            <div className={`submit-post-element-${darkMode?"dark":"light"}`} onClick={handlePost}>
                                <div className='submit-post-icon'><IoDocumentText /></div>
                                <div style={{ fontSize: "18px" }}>Post</div>
                            </div>
                            <div className={`submit-post-element-${darkMode?"dark":'light'}`}onClick={handleImages}>
                                <div className="submit-post-icon"><IoImageOutline /></div>
                                <div style={{ fontSize: "18px" }}>Images & Videos</div>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:"column"}} >
                            {post && <div style={{display:'flex', flexDirection:"column", margin:"14px"}} >
                            <input type="text" name="title" value={textInputs.title} placeholder='Title' className={`submit-post-input-${darkMode?"dark":'light'}`}onChange={onChange}/>
                            <textarea name='content' value={textInputs.content} placeholder='Text (optional)' className={`submit-post-input-${darkMode?"dark":'light'}`} onChange={onChange} style={{height:"120px"}}/>
                            <button className='full' style={{width:"fit-content"}} onClick={handleCreatePost} disabled={textInputs.title? true : false}>Post</button>
                            </div>}
                            {images && 
                            <div>
                            {selectedFile? (<div style={{justifyContent:"center", alignItems:"center"}}>
                                <img src={selectedFile} alt="uploadedimage" className='uploaded-image'/>
                                <div>
                                <button className='full' onClick={handlePost}>Back to Post</button>
                                <button className='full' onClick={()=> setSelectedFile('')}>Remove</button>
                                </div>
                                </div>):(<div className='file-content'>
                            <input type='file' name='image' id='file' onChange={onSelectFile} ref={selectFileRef}/>
                            <label htmlFor='file'>
                            <button className='full' style={{width:"fit-content"}} onClick={() => selectFileRef.current?.click()}>Upload</button>
                            </label>
                            </div>)}
                            </div>
                        }
                            
                        </div>
                    </div>

                </div>
                <div className="body-2">
                    <AboutCommunity/>
                </div>
            </div>
        </div>
    )
}

export default SubmitPost
