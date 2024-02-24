import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FaRedditSquare} from "react-icons/fa"
import { ChevronDownIcon } from '@chakra-ui/icons';
import { UserLogedIn } from '../../App';
import { BsThreeDots } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md"
import { Divider } from '@mui/material';
import { IoSparkles } from 'react-icons/io5';


const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {logedIn, setLogedIn} = React.useContext(UserLogedIn);
  const handleLogOut = () =>{
    sessionStorage.clear();
    setLogedIn(false)
}
const username = sessionStorage.getItem("userInfo");
const info = JSON.parse(username);
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      {logedIn ? <div style={{ color:"#ddd", display:"flex",fontSize:"30px", alignItems:"center", cursor:"pointer", width:"150px"}}>
          <FaRedditSquare/>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"4px"}}>
            <span style={{color:"black", fontSize:"12px"}}>{info?.name}</span>
            <div style={{display:"flex", alignItems:"center"}}>
              <IoSparkles style={{color:"#FF4500", fontSize:"12px"}}/>
              <span style={{color:"black", fontSize:"12px"}}>1 karma</span>
            </div>
          </div>
        <ChevronDownIcon/>
      </div>:
      <div style={{fontSize:"30px", display:"flex", alignItems:"center", cursor:"pointer"}}> 
        <BsThreeDots/>
        </div>}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {logedIn ? (
          <div>
          <div style={{display:"flex", width:"150px", alignItems:"center", gap:"10px", fontWeight:"600", paddingLeft:"10px"}}>
            <CgProfile style={{fontSize:"20px"}}/>
            User Stuff
          </div>
          <MenuItem>
          <div style={{display:"flex", width:"150px", alignItems:"center", gap:"10px", fontWeight:"600"}}>
            Profile
          </div>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleLogOut}>
          <div style={{display:"flex", width:"150px", alignItems:"center", gap:"10px", fontWeight:"600"}}>
            <MdOutlineLogin style={{fontSize:"20px"}}/>
            Log Out
          </div>
        </MenuItem>
        </div>
        )
        :
        (<MenuItem>
          <div style={{display:"flex", width:"100px", alignItems:"center", gap:"10px", fontWeight:"600"}}>
            <MdOutlineLogin style={{fontSize:"20px"}}/>
            Log In/ Sign Up
          </div>
        </MenuItem>)
        }
      </Menu>
    </div>
  )
}

export default UserMenu
