import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../Actions/UserAction';
import './User.css'

const User = ({ person }) => {
    const dispatch = useDispatch();
    const {user}=useSelector((state)=>state.authReducer.authData)
    const [following,setFollowing]=useState(person.following.includes(user._id))
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const handleFollow=()=>{
        following
        ?dispatch(unfollowUser(person._id,user))
        :dispatch(followUser(person._id,user))

        setFollowing((prev)=>!prev)
    }
    return (
        <div className="follower">
            <div className='fl'>
                <img src={person.profilePicture?serverPublic+person.profilePicture:serverPublic+"defaultProfile.png"} alt="" className="followerImg" />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            {/* &nbsp; */}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <button className={following? 'button fc-button unfollowButton':'button fc-button '} onClick={handleFollow}>
                {following? "UnFollow" :"Follow"}
            </button>
        </div>
    )
}

export default User