import React from 'react'
import PurchasingCard from '../PurchasingCard/PurchasingCard';
import VideoCard from '../VideoCard/VideoCard'
import "./IntroductionCard.scss";

const IntroductionCard = () => {
  return (
    <div className='container'>
      <div className='purchasebeforeintro'>
      <PurchasingCard/>
      </div>
    <div className='introductionvideocard'>
        <VideoCard hideprogressbar cardWidth="cardWidth" />
        <VideoCard hideprogressbar lockvideo cardWidth="cardWidth"/>
        <VideoCard hideprogressbar lockvideo cardWidth="cardWidth"/>
        <VideoCard hideprogressbar lockvideo cardWidth="cardWidth"/>
        <VideoCard hideprogressbar lockvideo cardWidth="cardWidth"/>
        <VideoCard hideprogressbar lockvideo cardWidth="cardWidth"/>
    </div>
    </div>
  )
}

export default IntroductionCard