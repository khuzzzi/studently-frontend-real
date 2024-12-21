import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPosts } from '../reduxstore/slices/allPostsSlice'
const useGetAllPosts = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("Fetching posts...");
    const GetAllPosts = async () => {
      try {
        const response = await axios.get("https://studently-backend-five.vercel.app/api/v1/posts/allPosts");
        if (response.data.success === true) {
          dispatch(setPosts(response.data.allPosts));
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetAllPosts();
  }, [dispatch]);
  
}

export default useGetAllPosts