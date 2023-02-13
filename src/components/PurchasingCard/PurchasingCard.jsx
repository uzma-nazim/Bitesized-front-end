import React from 'react'
import shareicon from "../../assets/shareicon.svg";
import playicon from "../../assets/playicon.svg";
import thumbnail from "../../assets/videoThumnail.png";

export const PurchasingCard = () => {
  return (
    <div className="dollarssection">
              <div className="forplayicon">
                {/* <img className="playicon" src={playicon} alt="" /> */}
                <div className="playbtnwrapper blacklayer">
                  <div className="playicon">
                    <img src={playicon} alt="" />
                  </div>
                </div>
                <video
                  className="purchasevideocard"
                  poster={thumbnail}
                  width="368px"
                >
                  <source type="video/mp4" src={""} />
                </video>
              </div>
              <p className="oldkids">For 8-10 years old kids.</p>
              <div className="shareicon">
                <p className="dollars">$100.00</p>
                {/* <button> */}
                  <img src={shareicon} alt="" />
                {/* </button> */}
              </div>
              <div className="purchase">
                <button className="purchasecourse">Purchase Course</button>
              </div>
              <ul className="lessons">
                <li>6 lessons</li>
                <li>20 Hours Duration</li>
                <li>2000 People Purchased</li>
                <li>Full Lifetime access</li>
                <li>Access on mobile and TV</li>
              </ul>
            </div>
  )
  
}

export default PurchasingCard;