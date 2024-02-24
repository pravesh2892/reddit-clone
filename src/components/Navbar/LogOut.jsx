import React, { useContext, useEffect, useState } from 'react'
import Icons from './Icons';
import UserMenuUpdated from './UserMenuUpdated';
import { Button, Modal, Tooltip, Box } from '@mui/material';
import { FaRedditSquare } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { DarkMode } from '../../App';


const LogOut = () => {
  const { darkMode } = useContext(DarkMode);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const username = sessionStorage.getItem("userInfo");
  const info = JSON.parse(username);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div className='logout-container'>
      <Icons />
      {/* <UserMenuUpdated/> */}
      {matches && (
      <>
      <Tooltip title="Open settings">
        <Button onClick={() => setOpenSettingModal(true)} sx={{ p: 0, textTransform: 'none' }}>
          <Box sx={{ p: '20px', mt: '10px' }}>
            <div style={{ color: "#ddd", display: "flex", fontSize: "30px", alignItems: "center", cursor: "pointer", width: "150px" }}>
              <FaRedditSquare />
              <div style={{ display: "flex", flexDirection: "column", paddingLeft: "4px" }}>
                <span style={{ color: `${darkMode ? "white" : "black"}`, fontSize: "12px" }}>{info?.name}</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IoSparkles style={{ color: "#FF4500", fontSize: "12px" }} />
                  <span style={{ color: `${darkMode ? "white" : "black"}`, fontSize: "12px" }}>1 karma</span>
                </div>
              </div>
              <ChevronDownIcon />
            </div>
          </Box>
        </Button>
      </Tooltip>
      <Modal open={openSettingModal} onClose={() => setOpenSettingModal(false)} sx={{ top: '50px', left: "85%" }}>
        <UserMenuUpdated />
      </Modal>
      </>)}
      {!matches && 
       (<>
       <Tooltip title="Open settings">
         <Button onClick={() => setOpenSettingModal(true)} sx={{ p: 0, textTransform: 'none' }}>
           <Box sx={{ p: '10px 0px',  mt: '10px' }}>
             <div style={{ color: "#ddd", display: "flex", fontSize: "30px", alignItems: "center", cursor: "pointer" }}>
               <FaRedditSquare />
               {/* <div style={{ display: "flex", flexDirection: "column", paddingLeft: "4px" }}>
                 <span style={{ color: `${darkMode ? "white" : "black"}`, fontSize: "12px" }}>{info?.name}</span>
                 <div style={{ display: "flex", alignItems: "center" }}>
                   <IoSparkles style={{ color: "#FF4500", fontSize: "12px" }} />
                   <span style={{ color: `${darkMode ? "white" : "black"}`, fontSize: "12px" }}>1 karma</span>
                 </div>
               </div> */}
               <ChevronDownIcon />
             </div>
           </Box>
         </Button>
       </Tooltip>
       <Modal open={openSettingModal} onClose={() => setOpenSettingModal(false)} sx={{ top: '50px', left: "50%" }}>
         <UserMenuUpdated />
       </Modal>
       </>)}
      {/* <UserMenu/> */}
    </div>
  )
}

export default LogOut
