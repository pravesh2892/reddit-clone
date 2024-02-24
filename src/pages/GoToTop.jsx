import React, { useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () =>{
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };

    const listenToScroll = () =>{
        let heightToHidden = 20;
        const winScroll = 
            document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll );
        return () => window.removeEventListener("scroll", listenToScroll);
        },[]);

  return (
    <div className="wrapper">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn-icon" />
        Back To Top
      </div>
      )}
    </div>
  )
}

export default GoToTop
