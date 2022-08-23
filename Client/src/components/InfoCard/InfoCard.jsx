import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../Api/UserRequest.js'
import { logout } from '../../Actions/AuthAction'

const InfoCard = () => {

    const [modalOpened,setModalOpened]=useState(false);
    const dispatch=useDispatch();
    const params = useParams();
    const profileUserId=params.id;
    const [profileUser,setProfileUser]=useState({})
    const {user}=useSelector((state)=>state.authReducer.authData);

    useEffect(()=>{
        const fetchProfileUser=async()=>{
            if(profileUserId===user._id){
                setProfileUser(user);
                console.log(user)
            }
            else{
                console.log("fetching....")
                const profileUser= await UserApi.getUser(profileUserId)
                setProfileUser(profileUser);
                console.log(profileUser)

            }
        }
        fetchProfileUser();
    },[user])

    const handleLogOut=()=>{
        dispatch(logout())
    }

    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                    <UilPen width='2rem' height='1.5rem' 
                    onClick={()=>setModalOpened(true)} />
                    <ProfileModal 
                    modalOpened={modalOpened} 
                    setModalOpened={setModalOpened}
                    data={user}
                    />
                </div>

                ):("")}
                
            </div>
            <div className="info">
                <span>
                    <b>Gender </b>
                </span>
                <span>
                    {profileUser.gender}
                </span>
            </div>
            <div className="info">
                <span>
                    <b>Lives In </b>
                </span>
                <span>
                    {profileUser.livesIn}
                </span>
            </div>
            <div className="info">
                <span>
                    <b>Works At </b>
                </span>
                <span>
                    {profileUser.worksAt}
                </span>
            </div>
            <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default InfoCard