import React from 'react'
import CreatePostLink from '../CommunityPage/CreatePostLink'
import HomeFeedPost from './HomeFeedPost'
import SecondTabLogedIn from './SecondTabLogedIn'

const LogedInFeed = () => {
  return (
    <div className="community-body-conatiner">
    <div className='community-body-wrapper'>
    <div className='body-1' >
      <CreatePostLink/>
      <HomeFeedPost/>
    </div>
    <div className="body-2">
      <SecondTabLogedIn/>
    </div>
    </div>
  </div>
  )
}

export default LogedInFeed
