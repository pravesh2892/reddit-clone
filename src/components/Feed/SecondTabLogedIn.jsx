import React, { useContext } from 'react'
import { GiCheckedShield } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import { DarkMode } from '../../App'

const SecondTabLogedIn = () => {
    const { darkMode } = useContext(DarkMode);
    const navigate = useNavigate();
    const handlePremiumClick = () =>{
        navigate('/premiumPage');
    }
    return (
        <>
            <div className={`second-body-1-${darkMode?"dark":"light"}`}>
                <div style={{ display: "flex" }}>
                    <div className='premium-icon'><GiCheckedShield /></div>
                    <div className={`premium-text-${darkMode?"dark":"light"}`}>
                        <h3>Reddit Premium</h3>
                        <div>The best Reddit experience</div>
                    </div>
                </div>
                <button className='premium-btn' style={{ width: "100%", padding: "8px 0px", marginRight: '10px' }}
                onClick={handlePremiumClick}>Try Now</button>
            </div>
            <div className='second-tab-container'>
                <div className='second-tab-container-nav'>
                    <img src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png" alt="img"/>
                    {/* <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"/> */}
                </div>
                <div className={`second-tab-container-body-${darkMode?"dark":"light"}`}>
                    <div style={{ display: "flex" }}>
                        <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" alt="img" />
                        <span className='text-home'>Home</span>
                    </div>
                    <p className='text'>Your personal Reddit frontpage. Come here
                        to check in with your favorite communities.</p>
                    <br />
                    <button className='full' style={{ margin: "0px 0px 12px 0px" }} onClick={()=>navigate('/submitPost')}>Create Post</button>
                    <button className='outline' style={{ margin: "0px 0px 12px 0px" }} onClick={()=>navigate('/communityPage')}>Create Community</button>
                </div>
            </div>
            <div className={`second-body-3-${darkMode?"dark":"light"}`}>
                <div className="footer" >
                    <div style={{ width: "50%" }}>
                        <div>User Agreement</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div>Content Policy</div>
                        <div>Moderate Code of Conduct</div>

                    </div>
                </div>
                <div className="footer" style={{borderTop:"1px solid #ddd"}}>
                    <div style={{ width: "50%" }}>
                        <div>English</div>
                        <div>Francais</div>
                        <div>Italiano</div>
                    </div>
                <div style={{ width: "50%" }}>
                    <div>Deutsh</div>
                    <div>Espanol</div>
                    <div>Portugues</div>
                </div>
            </div>
            <div className="footer" style={{borderTop:"1px solid #ddd"}}>
                Reddit. Inc. &copy 2023. All rights reserved.
            </div>
        </div >
        </>
  )
}

export default SecondTabLogedIn
