import React from 'react'
import Followerscard from '../Followerscard/Followerscard'
import InfoCard from '../InfoCard/InfoCard'
import Logosearch from '../LogoSearch/Logosearch'
import './ProfileLeft.css'
const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <Logosearch/>
        <InfoCard/>
        <Followerscard/>
    </div>
  )
}

export default ProfileLeft