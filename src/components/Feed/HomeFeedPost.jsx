import React, { useEffect, useState } from 'react'
import HomePost from './HomePost';

const HomeFeedPost = () => {
    const proectId = "dbt6ga9tkodz";
    const [page, setPage] = useState(1);
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInfiniteScroll = async() =>{
      // console.log("scroll-height", document.documentElement.scrollHeight)
        try {
          if(window.innerHeight + document.documentElement.scrollTop + 1 >= 
            document.documentElement.scrollHeight){
              if(page< 8){
              setPage((prev) => prev+1)
              }
            }
        }catch(err){
          console.log(err);
        }
    }
    useEffect(()=>{
      setIsLoading(true);
        fetch(`https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}` ,{
            method: "GET",
            headers:{
                projectId: proectId
            },
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setPostList((prev)=> [...prev, ...data.data]);
            setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setIsLoading(false);
        })
    }, [page]);

    useEffect(()=>{
      window.addEventListener("scroll", handleInfiniteScroll)
      return () => window.removeEventListener("scroll", handleInfiniteScroll)
    })
  return (
    <div>
      {isLoading ? <div>Loading...</div> :

        (postList.length && postList.map((post, index)=>{
            return (
                <HomePost key={index} {...post} />
            )
        }))
      }
    </div>
  )
}

export default HomeFeedPost
