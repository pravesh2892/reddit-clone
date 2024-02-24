import React, { useEffect, useState } from 'react'
import { getHeaderWithProjectId } from '../../utils/configs';
import axios from 'axios';
import PopularCard from './PopularCard';

const BeforeLogInPopular = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [popularList, setPopularList] = useState([]);

    const handleInfiniteScroll = async() =>{
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
    <div className='main-feed-container'>
    {isLoading ? <div>Loading...</div>:
      (popularList.length && popularList.map(({_id, ...feed})=>{
        return (
            <PopularCard key={_id} {...feed} />
        )

      }))}
      </div>
  )
}

export default BeforeLogInPopular
