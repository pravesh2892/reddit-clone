import React from 'react'

const OathButtons = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%", gap:"20px"}}>
      <button className='outline-btn'>
        <img src="/images/google.png" style={{height:"20px", marginRight:"10px"}} alt='img'/>
        <span >Continue with Google</span>
        </button>
      <button className='outline-btn'>Some Other Provider</button>
    </div>
  )
}

export default OathButtons
