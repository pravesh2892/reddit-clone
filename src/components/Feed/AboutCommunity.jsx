import React, { useContext } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { RiCakeLine } from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'
import { DarkMode } from '../../App'

const AboutCommunity = () => {
    const { darkMode } = useContext(DarkMode);
    const navigate = useNavigate()
  return (
    <div className='about-community-container'>
       <div className={`about-nav-${darkMode?"dark":"light"}`}>
        <div style={{fontSize:"14px", fontWeight:"700"}}>About Community</div>
        <div><HiOutlineDotsHorizontal /></div>
       </div>
       <div className={`about-body-${darkMode?"dark":"light"}`}>
            <div style={{display:"flex", width:'100%', padding:'8px', fontWeight:700, borderBottom:"1px solid #ddd"}}>
                <div style={{display:"flex", flexDirection:"column", flexGrow: 1 }}>
                    <div>1</div>
                    <div>Members</div>
                </div>
                <div style={{display:"flex", flexDirection:"column", flexGrow: 1 }}>
                    <div>1</div>
                    <div>Online</div>
                </div>
            </div>
            <div style={{display:"flex",alignItems:"center", width:'100%', padding:'6px', fontWeight:500}}>
                <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <RiCakeLine style={{fontSize:"18px"}}/>
                    <div>Created </div>
                </div>
            </div>
            <div style={{paddingRight:"18px"}}>
            <Link>
                <button className='full'style={{width:"100%"}} onClick={navigate("/submitPost")}>Create Post</button>
            </Link>
            </div>
       </div>
    </div>
  )
}

export default AboutCommunity
