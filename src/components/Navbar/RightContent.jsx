import React, { useContext, useState } from 'react';
import { UserLogedIn } from '../../App';
import LogOut from './LogOut';
import LogInModal from '../Modal/LogInModal';
import { BsQrCodeScan } from 'react-icons/bs';
import GetAppModal from '../Modal/GetAppModal';

const RightContent = () => {
  const [open, setOpen] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const { logedIn } = useContext(UserLogedIn);

  const openDialog = () => {
    setOpen(true);
  }
  const openAppDialog = () => {
    setOpenApp(true);
  }
  return (

    <>

      {!logedIn ? <div className='contact-container' >
        <button className='app-btn' style={{ borderRadius: "60px" }} onClick={openAppDialog}>
          <p>
            <BsQrCodeScan /> Get app
          </p>
        </button>
        <button className="btn" onClick={openDialog}>Log In</button>
        <LogInModal open={open} setOpen={setOpen} />
        <GetAppModal openApp={openApp} setOpenApp={setOpenApp}/>
      </div> : <LogOut />}
    </>
  )
}

export default RightContent
