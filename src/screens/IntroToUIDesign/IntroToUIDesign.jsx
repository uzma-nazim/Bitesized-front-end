import React from 'react'
import Header from '../../components/Header/Header'
import IntroUIDesignStart from '../../components/IntroUIDesignStart/IntroUIDesignStart'
import RateCourses from '../../components/RateCourses/RateCourses'

const IntroToUIDesign = () => {
  return (
    <div>
        <Header userLogin/>
        <IntroUIDesignStart/>
        <RateCourses/>
    </div>
  )
}

export default IntroToUIDesign