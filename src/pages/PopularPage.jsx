import React from 'react'
import SideNavBar from '../components/SideBar/SideNavBar'
import Popular from '../components/Popular/Popular'
import BeforeLogInPopular from '../components/Popular/BeforeLogInPopular'

const PopularPage = () => {
  return (
    <div className='home-container'>
      <SideNavBar/>
      <BeforeLogInPopular />
      <Popular/>
    </div>
  )
}

export default PopularPage
