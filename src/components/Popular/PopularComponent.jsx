import React from 'react'
import CreatePostLink from '../CommunityPage/CreatePostLink';
import SecondTabLogedIn from '../Feed/SecondTabLogedIn';
import PopularPost from './PopularPost';

const PopularComponent = () => {
    
  return (
    <div className="community-body-conatiner">
    <div className='community-body-wrapper'>
    <div className='body-1' >
      <CreatePostLink/>
      <PopularPost/>
    </div>
    <div className="body-2">
      <SecondTabLogedIn/>
    </div>
    </div>
  </div>
  )
}

export default PopularComponent
