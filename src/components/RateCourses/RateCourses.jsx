import React from 'react'
import whiteratestar from "../../assets/whiteratestar.svg";
import "./RateCourses.scss";

const RateCourses = () => {
  return (
    <div className='mainrateuser'>
        <div>
            <h1 className='tellushow'>Tell us how this lesson was?</h1>
            <div>
                <img src={whiteratestar} alt="" />
                <img src={whiteratestar} alt="" />
                <img src={whiteratestar} alt="" />
                <img src={whiteratestar} alt="" />
                <img src={whiteratestar} alt="" />
            </div>
            <div className='forflexfourcolumn'>
            <input type="text" placeholder='Write your comment' />
            <button>Submit Review</button>
            <button>Watch Next</button>
            <a href="">Take me back to my <span>Course.</span></a>
            </div>
        </div>
    </div>
  )
}

export default RateCourses;