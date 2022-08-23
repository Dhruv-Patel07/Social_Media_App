import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location="profilePage"/>
            {/* &nbsp; */}
            <PostSide/>
        </div>
            <RightSide/>
    </div>
  )
}

export default Profile