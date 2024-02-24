import React from 'react'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from 'react-icons/io5'
import { BsChat } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
const ChannelPost = () => {
  return (
    <div className='post-conatiner'>
      <div className="like-area">
        <div className="post-icons"><IoArrowUpCircleOutline/></div>
        <div style={{fontSize:"14px", fontWeight:900 }}>like</div>
        <div className='post-icons'><IoArrowDownCircleOutline/> </div>
      </div>
      <div className="content-container">
        <div style={{fontSize:"12px", color:"gray", paddingBottom:"8px"}}>Posted by u/name date</div>
        <div style={{fontSize:'16px', fontWeight:"600", paddingBottom:"8px"}}>Title</div>
        <div style={{fontSize:'14px', paddingBottom:"8px"}}>body</div>
        <div>img</div>
        <div>
            <button className='post-btn'><BsChat/> <span>comment</span></button>
            <button className='post-btn'><AiOutlineDelete/> Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ChannelPost
