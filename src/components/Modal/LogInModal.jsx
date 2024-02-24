import React, { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { UserLogedIn } from "../../App";
import { getHeaderWithProjectIDAndContent } from "../../utils/configs";
import { Dialog } from "@mui/material";
import SignUpModal from "./SignUpModal";
import { toast } from "react-toastify";

const LogInModal = ({open, setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  }
  const navigate = useNavigate();
  const {setLogedIn} = useContext(UserLogedIn);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [passwordError, setErrorPassword] = useState('');
  const [emailError, setErrorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [userInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({...userInfo, [name] : value})
  }
  const openDialog = () => {
    setOpenSignUp(true);
    setOpen(false);
  }

  const logIn = async(userInfo) =>{
    userInfo.appType = "reddit"
    const headerConfig = getHeaderWithProjectIDAndContent();
    try{
      const res = await axios.post("https://academics.newtonschool.co/api/v1/user/login", 
        userInfo,
        headerConfig
      );
      console.log('res', res)
      if (res.data.token) {
        toast.success("Login Successful",
        {
          theme: "light",
          autoClose: 4000,
        });
        const accessToken = res.data.token;
        sessionStorage.setItem("authToken", accessToken);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data))
        setLogedIn(true);
        navigate("/")
        handleClose();
      } else {
        setMessage("Invalid API response format.");
        setColor("red");
        toast.error("Something went wrong",
        {
          theme: "light",
          autoClose: 4000,
        });
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
        setColor("red")
      } else {
        setMessage("An error occurred while making the login request.");
        setColor("red")
        console.error("Error:", err);
      }
    }
  };

  const handleLoginClick = (e) =>{
    e.preventDefault();
    const errorValues = Object.values(userInfo);
    const isEmptyVal = errorValues.some((el) => el === '');
    const {email, password} = userInfo;
    if(isEmptyVal){
      setMessage("All Fields must be filled");
      setColor('red')
    }else if(!email.includes('@gmail.com')){
      setErrorEmail("Email is invalid");
      setMessage("");
      setColor('red')
    }else if(password.length < 4){
      setErrorEmail('');
      setErrorPassword("Password length must be greater than 4.");
      setColor('red');
    }
    else{
      setErrorEmail('');
      setErrorPassword('');
      logIn(userInfo);
      
    }

  }

  // const handleOnSubmit = (e) => {
  //   if(error){
  //     return;
  //   }
  //   e.preventDefault();
  //   logIn(userInfo);
  //   // navigate("/");
  //   setShowLogInModal(false);
  // }
  return (
    
    <div className="modal-container">
      <Dialog open={open} onClose={handleClose}>
      <div className="modal-wrapper">
        <div className="title">Log In</div>
        {/* <OathButtons />
        <div>OR</div> */}
        <form >
          <input name="email" type="email" placeholder="email" onChange={handleOnChange} />
          {emailError && <p style={{color: color}}>{emailError}</p>}
          <input name="password" type="password" placeholder="password" onChange={handleOnChange} />
          {passwordError && <p style={{color: color}}>{passwordError}</p>}
          {message && <p style={{ color: color, fontSize: "14px" }}>{message}</p>}
          <button className="btn" onClick={handleLoginClick}>Log In</button>
          <div>
            <span>Not a Redditor? <span className="signUp" 
            onClick={openDialog}
            >SIGN UP</span></span>
          </div>
        </form>
      </div>
      </Dialog>
      <SignUpModal openSignUp={openSignUp} setOpenSignUp={setOpenSignUp}/>
    </div>

  )



}

export default LogInModal
