import React, { useEffect } from 'react'
import './Followerscard.css'
import {useSelector} from 'react-redux'
// import { Followers } from '../../Data/FollowersData'
import User from '../User/User'
import { useState } from 'react'
import { getAllUsers } from '../../Api/UserRequest'

const Followerscard = () => {
  const [persons,setPersons]=useState([]);
  const {user}=useSelector((state)=>state.authReducer.authData);

  useEffect(()=>{
    const fetchPersons=async()=>{
      const {data}=await getAllUsers();
      setPersons(data);
      console.log(data)
    };
    fetchPersons();
  },[]);

  return (
    <div className="Followerscard">
      <h3>People You May Know</h3>
      {persons.map((person, id) => {
        if(person._id!== user._id){

          return (
            <User person={person} key={id}/>
          )
        }
      })}
    </div>
  )
}

export default Followerscard