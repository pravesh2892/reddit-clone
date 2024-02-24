import React from 'react'
import { FaReddit } from 'react-icons/fa'

const Header = () => {
    // const [isJoined, setJoined] = useState(false);
  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"146px"}}>
      <div style={{height:"50%", backgroundColor:"#33a8ff"}}></div>
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"white", flexGrow:1}}>
        <div style={{display:"flex", width:"95%", maxWidth:"860px"}}>
          {/* {imgUrl ?<img src={imgUrl} />: */}
            <FaReddit style={{fontSize:"64px", position:"relative", top:"-10px", color:"#0060a8", border:"4px solid white", borderRadius:"50%"}}/>
            {/* } */}
            <div style={{padding:"10px 12px"}}>
                <div style={{display:'flex', flexDirection:"column"}}>
                    <div>name</div>
                    <div>r/name</div>
                </div>
            </div>
            <button className='full' style={{padding:"2px 10px", height:"30px"}}>Join</button>
        </div>
    </div>
    </div>
 
  )
}

export default Header
