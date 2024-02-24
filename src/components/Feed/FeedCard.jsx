import React from 'react'
import { toast } from 'react-toastify';


const FeedCard = (props) => {
  const { content, likeCount, author, channel, createdAt } = props;
  const handleClick = () => {
    toast.error("Log in first", {
      theme:"light"
    })
  }
  return (
    <div className='feed-wrapper'>
      <div className='feed-container'>
        <div className='profile-container'>
          <div className='channel-container'>
            <img src={channel.image} alt={channel.name}  />
            <div>{channel.name} </div>
          </div>
          <div>By {author.name}</div>
        </div>
        <p className='content'>{content}</p>
        <p className='created-at'>{createdAt}</p>
      </div>
      <div className='button-wrapper'>
        <button className='button' onClick={handleClick}>vote {likeCount}</button>
        <button className='button' onClick={handleClick}>Comment</button>
        <button className='button' onClick={handleClick}>Share</button>
      </div>
    </div>
  )
}

export default FeedCard
