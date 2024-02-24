import React, { useContext } from 'react'
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoNotificationsOutline
} from "react-icons/io5";
import { ImBullhorn } from "react-icons/im"
import { useNavigate } from 'react-router-dom';
import { DarkMode } from '../../App';


const Icons = () => {
  const { darkMode } = useContext(DarkMode)
  const navigate = useNavigate();
  return (
    <div className='icons-container'>
      <div className='icons-visible'>
        <div className={`icons-wrapper-${darkMode?"dark":"light"}`} style={{fontSize:"22px"}} onClick={()=>navigate('/popular')}>
            <BsArrowUpRightCircle/>
        </div>
        <div className={`icons-wrapper-${darkMode?"dark":"light"}`} style={{fontSize:"24px"}} onClick={()=> navigate('/message')}>
        <BsChatDots/>
        </div>
        <div className={`icons-wrapper-${darkMode?"dark":"light"}`} style={{fontSize:"24px"}} onClick={()=>navigate('/notification')}>
            <IoNotificationsOutline/>
        </div>
        <div className={`icons-wrapper-${darkMode?"dark":"light"}`} style={{fontSize:"24px"}} onClick={()=>navigate('/submitPost')}>
            <GrAdd/>
        </div>
        <div className={`icons-wrapper-${darkMode?"dark":"light"}`} style={{fontSize:"24px"}} onClick={()=>navigate('/comingSoon')}>
            <ImBullhorn/>
        </div>
      </div>
    </div>
  )
}

export default Icons
