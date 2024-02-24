import React, { useContext, useRef, useState } from 'react'
import { BsChat, BsFillPersonFill } from "react-icons/bs"
import { ImArrowUp } from 'react-icons/im'
import { ImArrowDown } from 'react-icons/im'
import { TfiArrowRight } from 'react-icons/tfi'
import { DarkMode } from '../../App'
import axios from 'axios'
import { getAuthHeaderConfig } from '../../utils/configs'

const HomePost = (props) => {
    const { darkMode } = useContext(DarkMode);
    const { content, likeCount, author, channel, commentCount, _id } = props;
    const [like, setLike] = useState(likeCount);
    const [colorUp, setColorUp] = useState("#ddd");
    const [colorDown, setColorDown] = useState("#ddd");
    const [comments, setComments] = useState();
    const [commentCounts, setCommentCounts] = useState(commentCount)
    const [openCommentSec, setOpenCommentSec] = useState(false);
    const inputRef = useRef();

    const postId = _id
    const configs = getAuthHeaderConfig();
    const token = sessionStorage.getItem("authToken");
    const projectId = "dbt6ga9tkodz"

    const addLikeCount = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        {
          method: "POST",
          body: {
            postId: `${postId}`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
        if(data.status === "success"){
          setLike((prevState)=> prevState + 1 );
          setColorUp("#ff4500")
          setColorDown("#ddd")
        }
      }catch(err){
        console.log(err);
      }
    };

    const deleteLikeCount = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,
        {
          method: "DELETE",
          body: {
            postId: `${postId}`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
        if(data.status === "success"){
          setLike((prevState)=> prevState - 1 );
          setColorUp("#ddd");
          setColorDown("#ff4500")
        }
      }catch(err){
        console.log(err);
      }
    };

    const fetchingComment = async(postId, token, projectId) =>{
      try{
        const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`,
        {
          method:"GET",
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: `${projectId}`,
          }
        })
        const data = await res.json();
       
          setComments(data.data);
          console.log(data);
      }catch(err){
        console.log(err);
      }
    };

    const postCommentData = async (inputData) => {
    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/reddit/comment/${postId}`,
        {
          postId: `${postId}`,
          content: `${inputData}`,
          appType: "reddit",
        },
        configs
      );
      const data = [res.data.data];
      if (res.data.status === "success") {
        setComments([...comments, ...data]);
        setCommentCounts(commentCounts + 1);
        console.log(Comment);
      }
    } catch (err) {
      console.error(err);
    }
  };


    const onClickUpvote = () =>{
      addLikeCount(postId, token, projectId);
    }
    const onClickDownVote = () =>{
      deleteLikeCount(postId, token, projectId);
    }
    const handleCommentSec = () => {
      setOpenCommentSec((prevState) => !prevState);
      if (!openCommentSec) {
        fetchingComment(postId);
      }
    };
    const handlePostComment = () => {
      postCommentData(inputRef.current.value);
      inputRef.current.value = "";
    };
  
  return (
    <div style={{padding:"12px 0px"}}>
   
    <div className={`post-conatiner-${darkMode?"dark":"light"}`}>
      <div className={`like-area-${darkMode?"dark":"light"}`}>
        <div className="post-icons"  style={{color: colorUp}} onClick={onClickUpvote}><ImArrowUp/></div>
        <div className={`like-${darkMode?"dark":"light"}`}>{like}</div>
        <div className='post-icons' style={{color: colorDown}} onClick={onClickDownVote}><ImArrowDown/> </div>
      </div>
      <div className={`content-container-${darkMode?"dark":"light"}`}>
        <div className={`content-wrapper-${darkMode?"dark":"light"}`}>
        <div className='profile-container'>
            <div className='channel-container'>
            <img src={channel.image} alt={channel.name}/>
            <span className={`channel-name-${darkMode?"dark":"light"}`}>r/{channel.name}</span>
            <span>Posted by u/{author.name}</span>
            <span>{Math.floor(Math.random() * (24 - 1)) + 1}
            <span>hours ago</span>{" "}</span> 
            </div>
            </div>
        </div>
        {/* <div style={{fontSize:'16px', fontWeight:"600", paddingBottom:"8px"}}>{title}</div> */}
        <div className={`content-home-${darkMode?"light":"dark"}`}>{content}</div>
        <div>
            {/* <img src={images}/> */}
        </div>
        <div>
            <button className={`post-btn-${darkMode?"dark":"light"}`} onClick={handleCommentSec}><BsChat/> <span>{commentCounts} comments</span></button>
            {/* <button className={`post-btn-${darkMode?"dark":"light"}`}><AiOutlineDelete/> Delete</button> */}
        </div>
        <div>
          {openCommentSec && (
            <div className="comment-sec">
              {comments && comments.map((ele, indx) => (
                <div
                  key={indx}
                  className={`comment-box-${darkMode?"dark":"light"}`}>
                  <section>
                    <div className='user-info'>
                      <span>
                      <BsFillPersonFill />
                      user/
                      
                      {Math.random().toString(36).substring(2, 7).toUpperCase()}
                      </span>
                      <span>
                      {ele.createdAt.substring(0, 10)} {ele.createdAt.substring(11, 19)}
                      </span>
                    </div>
                  </section>
                  <p
                    className="comment-content"
                  >
                    {ele.content}
                  </p>
                </div>
              ))}
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="What are your thoughts?"
                  className=""
                  ref={inputRef}
                  // onBlur={() => }
                />
                <TfiArrowRight
                  className="comment-arrow"
                  onClick={handlePostComment}
                />
              </div>
            </div>
          )}
        </div>
      </div>
     
    </div>
  
    </div>
  )
}


export default HomePost
