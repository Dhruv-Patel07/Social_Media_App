import React from 'react'
import './TrendCard.css'
import { TrenData } from '../../Data/TrendData'
const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends For You</h3>
        {TrenData.map((trend)=>{
            return(
                <div className="trend">
                    <span> #{trend.name}</span>
                    <span>{trend.share}K Shares</span>
                </div>
            )
        })}

    </div>
  )
}

export default TrendCard