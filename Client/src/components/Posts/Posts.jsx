import React from 'react'
import './Posts.css'
// import { PostsData } from '../../Data/PostsData'
import {useDispatch, useSelector} from 'react-redux'
import Post from '../Post/Post'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../Actions/PostAction'
import { useParams } from 'react-router-dom'

const Posts = () => {
  const dispatch=useDispatch();
  const params=useParams()
  const {user}=useSelector((state)=>state.authReducer.authData);
  let {posts,loading}=useSelector((state)=>state.postReducer)

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])

  if(!posts) return "no posts";
  if(params.id) posts=posts.filter((post)=>post.userId===params.id)
  return (
    <div className="posts">
        {loading
        ?"Posts Fetching ..... Thank You For Waiting :)"
        :posts.map((post,id)=>{
          return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts