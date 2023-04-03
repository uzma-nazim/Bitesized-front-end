import React from 'react'
import PurchasingCard from '../PurchasingCard/PurchasingCard';
import VideoCard from '../VideoCard/VideoCard'
import "./IntroductionCard.scss";

const IntroductionCard = ({courses}) => {
  return (
    <div className='container'>
      <div className='purchasebeforeintro'>
      <PurchasingCard/>
      </div>
    <div className='introductionvideocard'>
    {
      courses && courses.map((val)=>{
        return (
          <VideoCard hideprogressbar cardWidth="cardWidth" />
          )
      })
    }
    </div>
    </div>
  )
}

export default IntroductionCard