import React from 'react'
import Posts from '../Posts/Posts'
import Postshare from '../PostShare/Postshare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className="PostSide">
      <Postshare/>
      <Posts/>
    </div>
  )
}

export default PostSide