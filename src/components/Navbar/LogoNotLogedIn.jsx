import React from 'react'

const LogoNotLogedIn = () => {
 
  let src =  "/images/Reddit-Text-Black.png";
 
  
  return (
    <div className="logo-img">
          {/* <MenuIcon sx={{color: "white", display: {sm:"block", lg:"none"}}} /> */}
        <img src="/images/redditFace.svg" className="image" alt=''/>
        <img src={src} className="image-text" alt='' />
    </div>
  )
}

export default LogoNotLogedIn