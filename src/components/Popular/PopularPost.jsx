import React, { useContext, useEffect, useState } from 'react'
import Moment from 'react-moment'
import { getHeaderWithProjectId } from '../../utils/configs';
import axios from 'axios';
import { RiCakeLine } from "react-icons/ri"
import { DarkMode } from '../../App';

const PopularPost = () => {
    const { darkMode } = useContext(DarkMode);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [popularList, setPopularList] = useState([]);

    const handleInfiniteScroll = async() =>{
        // console.log("scroll-height", document.documentElement.scrollHeight)
          try {
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= 
              document.documentElement.scrollHeight){
                if(page<8){
                setPage((prev) => prev+1)
                }
              }
          }catch(err){
            console.log(err);
          }
      }
  
    const fetchPopularFeed = async(page) => {
      const config = getHeaderWithProjectId();
      setIsLoading(true);
      try{
        const res = await axios.get(`https://academics.newtonschool.co/api/v1/reddit/channel?limit=10&page=${page}`, config);
        // console.log("PopularRes", res.data.data);
        setPopularList((prev) => [...prev, ...res.data.data]);
  
      }catch(err){
        console.log(err);
      }finally{
        setIsLoading(false);
      }
    }
    useEffect(()=>{
      fetchPopularFeed();
    }, [page])

    
    useEffect(()=>{
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
      })
    return (
        <div>
            {isLoading ? <div>Loading</div> :
                (popularList.length && popularList.map(({ description, image, name, owner, createdAt}, index) => {
                    return (
                        <div style={{ padding: "12px 0px" }} key={index}>
                            <div className={`post-conatiner-${darkMode?"dark":"light"}`}>
                                {/* <div className="like-area">
                <div className="post-icons"  style={{color: colorUp}} onClick={onClickUpvote}><ImArrowUp/></div>
                <div style={{fontSize:"14px", fontWeight:900 }}>{like}</div>
                <div className='post-icons' style={{color: colorDown}} onClick={onClickDownVote}><ImArrowDown/> </div>
              </div> */}
                                <div className={`content-container-${darkMode?"dark":"light"}`}>
                                    <div className={`content-wrapper-${darkMode?"dark":"light"}`}>
                                        <div className='profile-container'>
                                            <div className='channel-container'>
                                                <img src={owner.profileImage} alt={name} className='popular-img'/>
                                                <span className={`channel-name-${darkMode?"dark":"light"}`}>r/{name}</span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div style={{fontSize:'16px', fontWeight:"600", paddingBottom:"8px"}}>{title}</div> */}
                                    <div className={`content-home-${darkMode?"light":"dark"}`}>{description}</div>
                                    <div className='popular-img-container'>
                                        <img src={image} alt={name} className='popular-channel-image'/>
                                    </div>
                                    <div>
                                            <span>Owner: u/{owner.name} </span>
                                            <span> <RiCakeLine/> <Moment fromNow>{createdAt}</Moment></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default PopularPost
