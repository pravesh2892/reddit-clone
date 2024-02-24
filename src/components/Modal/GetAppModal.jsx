import { Dialog } from '@mui/material'
import React from 'react'

const GetAppModal = ({ openApp, setOpenApp }) => {
  const handleClose = () => {
    setOpenApp(false);
  }
  return (
    <div>
      <Dialog open={openApp} onClose={handleClose}>
        <div className="app-modal">
          <button
            className="close-btn"
            onClick={() => setOpenApp(false)}
          >
            &times;
          </button>
          <h1>Get the Reddit app</h1>
          <div className="">
            <p>Scan this QR code to download the app now</p>
            <img src="https://i.pinimg.com/564x/77/f6/8e/77f68ea939566849943001c3648bf5c3.jpg" alt="qr-code" />
            <p>Or check it out in the app stores</p>
          </div>
          <div className="">
            <a
              href="https://play.google.com/store/apps/details?id=com.reddit.frontpage&pli=1"
              title="freepnglogos.com"
            >
              <img
                src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
                width="150"
                alt="play store logo black background"
              />
            </a>
            <a href="https://apps.apple.com/US/app/id1064216828">
              <img
                src="https://www.seekpng.com/png/detail/223-2231228_app-store-apple-transprent-download-on-apple-store.png"
                width="130"
                alt="App Store Apple Transprent - Download On Apple Store Icon@seekpng.com"
              />
            </a>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default GetAppModal
