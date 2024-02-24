import React, { useState } from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { getAuthHeaderConfig } from "../../../utils/configs";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";

const CommunityModal = ({ openDialog, setOpenDialog }) => {
  const [communityName, setCommunityName] = useState("");
  const [charactersRemaining, setCharcatersRemainig] = useState(21);
  const [communityType, setCommunityType] = useState("public");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value.length > 21) return;

    setCommunityName(e.target.value);
    setCharcatersRemainig(21 - e.target.value.length);
  }

  const onCommunitytypeChnage = (e) => {
    setCommunityType(e.target.name)
  }

  const createSubReddit = async(communityName) =>{
    const headerswithTokenConfig = getAuthHeaderConfig();
    console.log(headerswithTokenConfig);

    try{
      const res = await fetch("https://academics.newtonschool.co/api/v1/reddit/channel/",
      {
        method: "POST",
        body: {
          title: `${communityName}`,
          description: `This is a subreddit for ${communityName} channel`,
          images: "postImage",
          appType: 'reddit'
        },
        headers: {
          ...headerswithTokenConfig
        }
      }
      )
      const result = await res.json();
      console.log("community res", result)
    }catch(err){
      console.log('error', err)
    }
  }

  const handleClose = () => {
    setOpenDialog(false);
  }
  
  const handleCommunity = () =>{
    createSubReddit(communityName);
    handleClose();
    navigate("/communityPage");
    
  }
  return(
    <>
     <div className="modal-container">
      <Dialog open={openDialog} onClose={handleClose}>
        <div className="modal-wrapper" style={{ padding: "2rem", width:"570px" }}>
          <div className="title" style={{ fontSize: "18px", paddingBottom: "1rem", borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>Create a community</div>
          <div className='community-body'>
            <span style={{ fontWeight: 600 }}>Name</span>
            <span style={{ fontSize: "12px", color: "grey" }}
            >Community names including capitalization cannot be changed</span>
            <span style={{ position: "relative", top: "28px", left: '10px', width: '20px', color: "grey" }}>r/</span>
            <input type="text" className='community-input' value={communityName} onChange={handleChange} />
            <span style={{ color: "grey", fontSize: "12px" }}>{charactersRemaining} Charcters remaining</span>
            <div style={{ paddingTop: '1rem' }} >
              <div style={{ fontWeight: 600, paddingBottom:'10px' }}>Community Type</div>
              <div>
              <input type='checkbox' id='public' name="public" checked={communityType === 'public'} onChange={onCommunitytypeChnage} className="check-box-input"/>
              <label htmlFor="public" >
                <BsFillPersonFill style={{ color: "grey", marginRight: "10px" }} />
                <span style={{ fontSize: "15px", marginRight: '10px' }}>Public</span>
                <span style={{ fontSize: "12px", color: "grey" }}
                >Anyone can view, post, and comment to this community</span>
              </label>
              </div>
              <div>
              <input type='checkbox' id='restricted' name="restricted" checked={communityType === 'restricted'} onChange={onCommunitytypeChnage} className="check-box-input"/>
              <label htmlFor="restricted" >
                <BsFillEyeFill style={{ color: "grey", marginRight: "10px" }} />
                <span style={{ fontSize: "15px", marginRight: '10px' }}>Restricted</span>
                <span style={{ fontSize: "12px", color: "grey" }}
                >Anyone can view this community, but only approved users can post</span>
              </label>
              </div>
              <div>
              <input type='checkbox' id='private' name="private" checked={communityType === 'private'} onChange={onCommunitytypeChnage} className="check-box-input"/>
              <label htmlFor="private" >
                <HiLockClosed style={{ color: "grey", marginRight: "10px" }} />
                <span style={{ fontSize: "15px", marginRight: '10px', fontWeight: 500 }}>Private</span>
                <span style={{ fontSize: "12px", color: "grey" }}
                >Only approved users can view and submit to this community</span>
              </label>
              </div>
            </div>
          </div>
          <footer className="community-footer">
            <button onClick={handleClose} className="outline">Cancel</button>
            <button  className="full" onClick={handleCommunity}>Create community</button>
          </footer>
          
        </div>
        </Dialog>
      </div>
      </>
)
    }

export default CommunityModal
