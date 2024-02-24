import React, { useContext } from 'react'
import { FaReddit } from 'react-icons/fa'
import { IoImageOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { DarkMode } from '../../App';

const CreatePostLink = () => {
  const { darkMode } = useContext(DarkMode);
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/submitPost");
  }
  return (
    <div className={`createPost-container-${darkMode?"dark":"light"}`} onClick={handleClick}>
        <div style={{fontSize:"36px", color:"#ddd", marginRight:"6px"}}><FaReddit/></div>
        <input type='text' className={`input-post-${darkMode?"dark":"light"}`}  placeholder='Create Post' style={{flexGrow:1}} onClick={handleClick}/>
        <input type='file' id='file'/>
        <label htmlFor='file' className='file-icon' onClick={handleClick}>
          <IoImageOutline/>
        </label>
    </div>
  )
}

export default CreatePostLink
