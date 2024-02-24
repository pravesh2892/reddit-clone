import React from 'react'
import { toast } from 'react-toastify';

const PopularCard = (props) => {
  const { description,name, image, createdAt, owner } = props;
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
            <img src={image} alt={name} />
            <div>{name}</div>
          </div>
        </div>
        <p className='content'>{description}</p>
        <div className='content'>
            <p>Skills Used: </p>
            <ul style={{paddingLeft:"25px"}}>
            {owner.skills && owner.skills.map((skill, i)=> {
                return <li key={i}>{skill}</li>
            })}
            </ul>
        </div>
        <p className='created-at'>{createdAt}</p>
      </div>
      <div className='button-wrapper'>
        <button className='button' onClick={handleClick}>vote</button>
        <button className='button' onClick={handleClick}>Comment</button>
        <button className='button' onClick={handleClick}>Share</button>
      </div>
    </div>
  )
}

export default PopularCard
