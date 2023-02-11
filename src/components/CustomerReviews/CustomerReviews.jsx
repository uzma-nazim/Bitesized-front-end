import "./CustomReviews.scss";
import React from 'react'
import onlystar from "../../assets/onlystar.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import Reviews from "../Reviews/Reviews";
import devon from "../../assets/Ellipse 4212.svg";
import Albert from "../../assets/Ellipse 4213.svg";

export const CustomerReviews = () => {
  return (
<div className="container">
        <h1 className="customerReviews">Customer Reviews</h1>
    <div className="customerRevTop">
            <div className="totalrev">
                <p className="ratenums">4.8<sub>/5</sub></p>
                <p className="rev">Based on 89 reviews</p>
                <div className="starspacing">
                <img src={onlystar} alt="" />
                <img src={onlystar} alt="" />
                <img src={onlystar} alt="" />
                <img src={onlystar} alt="" />
                <img src={onlystar} alt="" />
                </div>
            </div>

        <div className="forflexprogress">

            <div className="forflexprogressstar">
            <div>
            <p>5 Star</p>
            </div> 
            <div className="progressbar1">
            <ProgressBar/>
            </div>
            </div>

            <div className="forflexprogressstar">
            <div>
            <p>4 Star</p>
            </div> 
            <div className="progressbar2">
            <ProgressBar/>
            </div>
            </div>

            <div className="forflexprogressstar">
            <div>
            <p>3 Star</p>
            </div> 
            <div className="progressbar3">
            <ProgressBar/>
            </div>
            </div>

            <div className="forflexprogressstar">
            <div>
            <p>2 Star</p>
            </div> 
            <div className="progressbar4">
            <ProgressBar/>
            </div>
            </div>

            <div className="forflexprogressstar">
            <div>
            <p>1 Star</p>
            </div> 
            <div className="progressbar5">
            <ProgressBar/>
            </div>
            </div>
        
        </div>
    </div>
    <Reviews picture={devon} name="Devon Lane" date="3 dasy ago" />
    <Reviews picture={Albert} name="Albert Flores" date="19 aug 2022" />
    <button className="roundedbluebtn">
        See More
      </button>
</div>
  )
}

export default CustomerReviews;