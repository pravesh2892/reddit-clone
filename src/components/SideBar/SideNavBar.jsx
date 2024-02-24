import React from 'react'
import { Link } from "react-router-dom";

const SideNavBar = () => {
return (
  <>
  <nav className='side-navbar'>
    <div className='scroll-box'>
    <ul className='scrollbox-inner'>
      <li><Link to="/"><i className="fa-solid fa-house"></i>Home</Link></li>
      <li><Link to="/popularPage"><i className="fa-solid fa-fire-flame-curved"></i>Popular</Link></li>
      <div className='text'></div>
      <li>TOPICS</li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-gamepad"></i>Gaming</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-basketball"></i>Sports</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-chart-simple"></i>Business</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-coins"></i>Crypto</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-tv"></i>Television</Link></li>
      <li><Link to="/comingSoon"><i className="fa-regular fa-star"></i>Celebrity</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-cat"></i>Animal and Pets</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-spoon"></i>Food and Drink</Link></li>
      <div className='text'></div>
      <li>RESOURCES</li>
      <li><Link to="/comingSoon"><i className="fa-brands fa-reddit-alien"></i>About Reddit</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-bullhorn"></i>Advertise</Link></li>
      <li><Link to="/comingSoon"><i className="fa-regular fa-circle-question"></i>Help</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-book-open"></i>Blog</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-wrench"></i>Careers</Link></li>
      <li><Link to="/comingSoon"><i className="fa-solid fa-microscope"></i>Press</Link></li>
      <div className='text'></div>
      <li><Link to="/comingSoon"><i className="fa-regular fa-paste"></i>Content Policy</Link></li>
      <li><Link to="https://www.reddit.com/policies/privacy-policy"><i className="fa-solid fa-scale-balanced"></i>Privacy Policy</Link></li>
      <li><Link to="https://www.redditinc.com/policies/user-agreement"><i className="fa-solid fa-newspaper"></i>User Agreement</Link></li>
      <li style={{fontSize:"10px", paddingTop:"10px"}}>Reddit, Inc. @ 2023. All rights reserved</li>
    </ul>
    
    </div>
   
  </nav>
  </>
)
}

export default SideNavBar
