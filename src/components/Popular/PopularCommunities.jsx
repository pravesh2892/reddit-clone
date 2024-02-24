import React from 'react'

const PopularCommunities = (props) => {
    const { name, image } = props;
  return (
    <div className='popular-community'>
      <img src={image} alt='img'/>
      <div>r/{name}</div>
    </div>
  )
}

export default PopularCommunities
