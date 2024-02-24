import React, { useEffect, useState } from 'react'
import { getHeaderWithProjectId } from '../../utils/configs';
import axios from 'axios';
import PopularCommunities from './PopularCommunities';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popularList, setPopularList] = useState([]);

  const fetchPopularFeed = async() => {
    const config = getHeaderWithProjectId();
    setIsLoading(true);
    try{
      const res = await axios.get("https://academics.newtonschool.co/api/v1/reddit/channel", config);
      setPopularList(res.data.data);

    }catch(err){
      console.log(err);
    }finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchPopularFeed();
  }, [])
  return (
   <div className='main-popular-container'>
     <div className='popular-wrapper'>
    {isLoading? (<div>Loading...</div> ) : (popularList.length && popularList.map(({_id, ...popularCard})=>{
      return <PopularCommunities key={_id} {...popularCard}/>;
    }))}
    </div>
   </div>
  )
}

export default Popular
