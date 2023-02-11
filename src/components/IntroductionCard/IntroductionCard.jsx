import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import "./IntroductionCard.scss";

const IntroductionCard = () => {
  return (
    <div className='container'>
    <div className='introductionvideocard'>
        <VideoCard hideprogressbar />
        <VideoCard hideprogressbar lockvideo/>
        <VideoCard hideprogressbar lockvideo/>
        <VideoCard hideprogressbar lockvideo/>
        <VideoCard hideprogressbar lockvideo/>
        <VideoCard hideprogressbar lockvideo/>
    </div>
    </div>
  )
}

export default IntroductionCard