import React from 'react'
import Followerscard from '../Followerscard/Followerscard'
import Logosearch from '../LogoSearch/Logosearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const Profileside = () => {
  return (
    <div className="ProfileSide">
        <Logosearch/>
        <ProfileCard location='homepage'/>
        <Followerscard/>
    </div>
  )
}

export default Profileside