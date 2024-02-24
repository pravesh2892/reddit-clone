import React from 'react'
import CreatePostLink from './CreatePostLink'
import ChannelPost from '../Feed/ChannelPost'
import AboutCommunity from '../Feed/AboutCommunity'

const CommunityBody = () => {
  return (
    <div className="community-body-conatiner">
      <div className='community-body-wrapper'>
      <div className='body-1' >
        <CreatePostLink/>
        <ChannelPost/>
      </div>
      <div className="body-2">
        <AboutCommunity/>
      </div>
      </div>
    </div>
  )
}

export default CommunityBody
