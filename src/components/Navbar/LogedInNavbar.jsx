import React, { useContext } from 'react'
import Logo from './Logo'
import RightContent from './RightContent'
import SearchBar from './SearchBar'

import DropDownMenu from './DropDownMenu'
import { DarkMode } from '../../App'
import { Link } from 'react-router-dom'

const LogedInNavbar = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={`navbar-${darkMode?"dark":"light"}`}>
      <Link to="/"><Logo /></Link>
      <DropDownMenu/>
      <SearchBar />
      <RightContent/>
    </div>
  )
}

export default LogedInNavbar
