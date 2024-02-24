import React, { useEffect, useRef, useState } from 'react';
import {TiHome} from "react-icons/ti"
import { IoChevronDown } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import CommunityModal from '../Modal/CommunityModal/CommunityModal';

export default function DropDownMenu() {
 const [open, setOpen] = useState(false);
 const [openDialog, setOpenDialog ] = useState(false);
  const homeMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const hideModal = (e) =>{
      if(homeMenuRef.current?.contains(e.target)){
        return;
      }
      setOpen(false);
    };
    document.addEventListener("click", hideModal);
    return () =>{
      document.removeEventListener("click", hideModal);
    }
  }, [])

  return (
    
 
      <div onClick={()=>{
      setOpen(true)
    }} ref={homeMenuRef}>
      <div className="dropdown-container" onClick={()=>navigate("/")}>
        <div style={{display:"flex"}}>
          <TiHome style={{fontSize:"22px", marginRight:"12px"}}/>
          <div className="home-text" >
            Home
          </div>
        </div>
        <IoChevronDown className='icon-drop'/>
      </div>
      {open &&
      <ul style={{margin:"4px"}}>
        <li onClick={() => setOpenDialog(true)} className='list-dropdown'>
      <div style={{display:"flex", width:"200px", alignItems:"center"}}>
        <GrAdd/>
        Create Community
      </div>
      </li>
      </ul>}
      <CommunityModal openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </div> 
     
  );
}
