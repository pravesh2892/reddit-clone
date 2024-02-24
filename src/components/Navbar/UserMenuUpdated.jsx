import React, { useContext } from 'react'
import { Box, Button, Switch} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';
import { FaRedditSquare } from 'react-icons/fa';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { IoSparkles } from 'react-icons/io5';
import { DarkMode, UserLogedIn } from '../../App';

const buttonStyles = {
  color: 'black',
  fontWeight: '100',
  width: '100%',
  p: '5px 20px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  textTransform: 'inherit',
  ':hover': {
    backgroundColor: '#f4f3f3'
  }

}
const boxStyle = {
  color: 'black',
  fontWeight: '100',
  fontSize:"14px",
  width: '100%',
  p: '5px 20px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  textTransform: 'inherit',
}

const iconStyles = {
  fontSize: '19px',
  mr: '5px'
}

const UserMenuUpdated = () => {
  const navigate = useNavigate();
  const { setLogedIn} = useContext(UserLogedIn);
  const handleLogOut = () =>{
    sessionStorage.clear();
    setLogedIn(false)
    navigate("/")
}

 const { darkMode, setDarkMode } = useContext(DarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 
const username = sessionStorage.getItem("userInfo");
const info = JSON.parse(username);

  return (
    <Box sx={{ border: '1px solid #d5d1d1', borderRadius: '4px', backgroundColor: `${darkMode?"#0B1416":"white"}`,width:'220px'}}>

      <Box sx={{ p: '20px', borderBottom: '1px solid #d5d1d1', mt: '10px' }}>
      <div style={{ color:"#ddd", display:"flex",fontSize:"30px", alignItems:"center", cursor:"pointer", width:"150px"}}>
          <FaRedditSquare/>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"4px"}}>
            <span style={{color: `${darkMode?"white":"black"}`, fontSize:"12px"}}>{info?.name}</span>
            <div style={{display:"flex", alignItems:"center"}}>
              <IoSparkles style={{color:"#FF4500", fontSize:"12px"}}/>
              <span style={{color: `${darkMode?"white":"black"}`, fontSize:"12px"}}>1 karma</span>
            </div>
          </div>
      </div>
      </Box>

      <Box>
        <Box sx={{ borderBottom: '1px solid #d5d1d1', py: '10px' }}>
          <Box>
            <Box sx={{...boxStyle, color: `${darkMode?"white":"black"}`}}>My Stuff</Box>
            <Link to='/comingSoon'><Button sx={{...buttonStyles, color: `${darkMode?"white":"black"}`}}><AccountCircleIcon sx={iconStyles} onClick={()=>navigate()} /> Profile</Button></Link>
            <Button sx={{...buttonStyles, color: `${darkMode?"white":"black"}`}} onClick={()=>navigate('/premiumPage')}><LocalPoliceIcon sx={iconStyles}/> Premium</Button>
            <Button sx={{...buttonStyles, color: `${darkMode?"white":"black"}`}} onClick={()=>navigate('/submitPost')}><AddIcon sx={iconStyles}/> Create a Post</Button>
          </Box>
        </Box>
        <Box sx={{ borderBottom: '1px solid #d5d1d1', py: '10px' }}>
          <Box>
          <Box sx={{...boxStyle, color: `${darkMode?"white":"black"}`}}>View Options</Box>
            <Button sx={{...buttonStyles, color: `${darkMode?"white":"black"}`}} onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
              <Switch sx={{ ml: '30px' }} checked={darkMode} readOnly />
            </Button>
            {/* <Button sx={buttonStyles}>Settings</Button>
            <Button sx={buttonStyles}>Help</Button> */}
            <Button sx={{...buttonStyles, color: `${darkMode?"white":"black"}`}} onClick={handleLogOut}>Logout</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UserMenuUpdated