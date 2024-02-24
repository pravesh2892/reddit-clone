import React, { useContext } from 'react'
import Feed from '../components/Feed/Feed'
import { UserLogedIn } from '../App'
import LogedInFeed from '../components/Feed/LogedInFeed'
import SideNavBar from '../components/SideBar/SideNavBar'
import Popular from '../components/Popular/Popular'

const Home = () => {
  const {logedIn} = useContext(UserLogedIn);
  return (
    <>
    {logedIn? <LogedInFeed/>:
    <div className='home-container'>
      <SideNavBar/>
    <Feed/>
    <Popular/>
  </div>
    }
    </>
    
  )
}

export default Home
