import React, { useContext } from 'react'
import SearchPage from './SearchPage'
import CreatePostLink from '../components/CommunityPage/CreatePostLink'
import SecondTabLogedIn from '../components/Feed/SecondTabLogedIn'
import { UserLogedIn } from '../App'
import SideNavBar from '../components/SideBar/SideNavBar'
import Popular from '../components/Popular/Popular'

const SearchPageWrapper = () => {
    const {logedIn, setLogedIn} = useContext(UserLogedIn);
    const token = sessionStorage.getItem('authToken')
    if(token){
        setLogedIn(true);
    }
    return (
        <>
        {logedIn ? (<div className="community-body-conatiner">
            <div className='community-body-wrapper'>
                <div className='body-1' >
                    <CreatePostLink />
                    <SearchPage />
                </div>
                <div className="body-2">
                    <SecondTabLogedIn />
                </div>
            </div>
        </div>) : (
            <div className='home-container'>
            <SideNavBar/>
            <SearchPage />
          <Popular/>
        </div>
        )}
        </>
        
    )
}


export default SearchPageWrapper
