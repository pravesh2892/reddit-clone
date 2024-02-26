import React, { useContext } from 'react'
import { DarkMode, UserLogedIn } from '../../App';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const navigate = useNavigate();
  const { logedIn, setSearchTerm } = useContext(UserLogedIn);
  const { darkMode } = useContext(DarkMode);
  

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/searchPage')
    setSearchTerm("");
  }

 

  return (
    <form className="search-bar" onSubmit={handleOnSubmit}>
    
      <input className={`search-input-${(logedIn && !darkMode) ? "light" : "dark"}`} 
      placeholder='Search Reddit' onChange={onChange}/>
    </form>
  )
}

export default SearchBar;
