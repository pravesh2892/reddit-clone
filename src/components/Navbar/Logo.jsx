import React, { useContext } from 'react'
import { DarkMode } from '../../App'
import { UserLogedIn } from "../../App"


const Logo = () => {
  const { darkMode } = useContext(DarkMode);
  const { logedIn } = useContext(UserLogedIn)
  let src = "";
  if(logedIn){
  src =  darkMode ? "/images/Reddit-Text-Black.png": "/images/redditText.svg" ;
  }else{
     src = "/images/redditText.svg";
  }
  
  return (
    <div className="logo-img">
          {/* <MenuIcon sx={{color: "white", display: {sm:"block", lg:"none"}}} /> */}
        <img src="/images/redditFace.svg" className="image" alt='img'/>
        <img src={src} className="image-text" alt='img'/>
    </div>
  )
}

export default Logo
