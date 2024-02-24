import React from 'react'
import SearchBar from './SearchBar'
import RightContent from './RightContent'
import { Link } from 'react-router-dom'
import LogoNotLogedIn from './LogoNotLogedIn'



const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><LogoNotLogedIn /></Link>
      <SearchBar/>
      <RightContent/>
    </nav>
  )
}

export default Navbar
