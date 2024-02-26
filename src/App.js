import './App.css';
import './AppLight.css';
import Navbar from './components/Navbar/Navbar';
import LogInModal from './components/Modal/LogInModal';
import SignUpModal from './components/Modal/SignUpModal';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GoToTop from './pages/GoToTop';
import { createContext, useState } from 'react';
import LogedInNavbar from './components/Navbar/LogedInNavbar';
import CommunityBody from './components/CommunityPage/CommunityBody';
import CommunityPage from './components/CommunityPage/CommunityPage';
import SubmitPost from './components/CommunityPage/SubmitPost';
import PremiumPage from './components/Premium/PremiumPage';
import ComingSoon from './pages/ComingSoon';
import PopularComponent from './components/Popular/PopularComponent';
import Notification from './pages/comigSoon/Notification';
import Message from './pages/comigSoon/Message';
import PopularPage from './pages/PopularPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPageWrapper from './pages/SearchPageWrapper';

export const UserLogedIn = createContext();
export const DarkMode = createContext();

function App(){
  
  const [logedIn, setLogedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const logedInStyle = {
    backgroundColor:"#ddd",
    color: "black"
  };
  const notLogedInStyle = {
    backgroundColor: "#ddd",
    color:"black"
  }
  if(!darkMode && logedIn){
    document.body.style.backgroundColor = "#ddd";
    document.body.style.color = "black"
  }else if(!logedIn){
    document.body.style.backgroundColor= "#ffffff";
    document.body.style.color = "black";
  }else{
    document.body.style.backgroundColor="black";
    document.body.style.color = "white";  
  }

  return (
    <div>
      <UserLogedIn.Provider value={{logedIn, setLogedIn, searchTerm, setSearchTerm}}>
      <DarkMode.Provider value={{darkMode, setDarkMode}}>
      
      {logedIn ? <LogedInNavbar/>: <Navbar/>}
    
     
      <ToastContainer position="top-center" />
   
  
    <Routes>
      <Route path='/' element={<Home style={logedIn && !darkMode ? logedInStyle : notLogedInStyle}/>} />
      <Route path='/popularPage' element={<PopularPage/>} />
      <Route path='/communityBody' element={<CommunityBody/>} />
      <Route path='/submitPost' element={<SubmitPost/>} />
      <Route path='/communityPage' element={<CommunityPage/>}/>
      <Route path='/premiumPage' element={<PremiumPage/>} />
      <Route path='/comingSoon' element={<ComingSoon/>} />
      <Route path='/popular' element={<PopularComponent/>} />
      <Route path='/notification' element={<Notification/>} />
      <Route path='/message' element={<Message/>} />
      <Route path='/searchPage' element={<SearchPageWrapper/> } />
      <Route path='/login' element={<LogInModal/>}/>
      <Route path='/signUp' element={<SignUpModal/>}/>
    </Routes>
    
      <GoToTop/>
      </DarkMode.Provider>
      </UserLogedIn.Provider>
      
    </div>

      
   
  );
}

export default App;
