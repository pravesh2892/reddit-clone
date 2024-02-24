import React, { useContext, useEffect, useState } from 'react'
import { UserLogedIn } from '../App'
import HomePost from '../components/Feed/HomePost';
import FeedCard from '../components/Feed/FeedCard';

const SearchPage = () => {
    const { logedIn, setLogedIn, searchTerm } = useContext(UserLogedIn);
    const token = sessionStorage.getItem('authToken')
    if (token) {
        setLogedIn(true);
    }
    const proectId = "dbt6ga9tkodz";
    const [isLoading, setLoading] = useState(false);
    const [productData, setProductData] = useState([]);
    const [filterPostList, setFilterPostList] = useState([]);
    console.log(searchTerm);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://academics.newtonschool.co/api/v1/reddit/post?limit=100", {
                method: "GET",
                headers: {
                    projectId: proectId
                },
            })
            const result = await res.json();
            console.log(result.data);
            setProductData(result.data)
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {

        const filterPosts = productData.filter((post) =>
            post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.channel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilterPostList(filterPosts);

    }, [searchTerm, productData])
    // console.log(filterPostList);
    return (
        <>
            {logedIn ? <div>
                {isLoading ? <div>Loading ...</div> : (
                    <div>
                        {filterPostList && filterPostList.map((post, index) => {
                            return <HomePost key={index} {...post} />
                        })}
                    </div>
                )}
            </div> : <div className='main-feed-container'>
                {isLoading ? <div>Loading... </div> :
                   
                        (filterPostList && filterPostList.map(({ ...feed }, index) => {
                            return <FeedCard key={index} {...feed} />
                        }))
                 
                }
            </div>}

        </>
    )
}

export default SearchPage
