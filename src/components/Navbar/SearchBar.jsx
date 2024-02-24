import React, { useContext } from 'react'
import { DarkMode, UserLogedIn } from '../../App';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const { logedIn, setSearchTerm } = useContext(UserLogedIn);
  const { darkMode } = useContext(DarkMode);
  // const [searchValue, setSearchValue] = useState('');

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/searchPage')
    setSearchTerm("");
  }

  // const clearSearch = () => {
  //   setSearchValue('');
  //   // setSearchTerm(''); // Clear the search term in your context if needed
  // }

  return (
    <form className="search-bar" onSubmit={handleOnSubmit}>

      <input className={`search-input-${(logedIn && !darkMode) ? "light" : "dark"}`} 
      // value={searchValue} 
      placeholder='Search Reddit' onChange={onChange}/>
    </form>
  )
}

export default SearchBar;
