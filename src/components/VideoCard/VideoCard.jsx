import React, { useRef, useState } from "react";
import thumbnail from "../../assets/videoThumnail.png";
import "./videoCard.scss";
import lock from "../../assets/lock.svg";

import { BsPlayFill } from "react-icons/bs";
import clock from "../../assets/clock.svg";
import book from "../../assets/book.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ hideprogressbar, lockvideo, cardWidth }) => {
  const navigate = useNavigate()
  const [play, setplay] = useState(false);

  const videoPlayer = useRef();
  const handlePlay = () => {
    videoPlayer.current.play();
    setplay(true);
  };
  return (
    <div onClick={() => navigate("/course-vidoe")} className={`videoCard ${cardWidth}`}>
      <div className="video-Box">
        <video className="thumbnail" ref={videoPlayer} poster={thumbnail} width="100%" height="208">
          <source type="video/mp4" src={""} />
        </video>
        {lockvideo ? <div className="playbtnwrapper blacklayer">
          <div className="lockicon">
            <img src={lock} alt="" />
          </div>
          <p className="smallText2 cardtext">
            Purchase bitesized course to watch more
          </p>
        </div> : <div className="playbtnwrapper">
          <div className="outercolor">
            <div className="playIcon">
              <BsPlayFill />
            </div>
          </div>
          <p className="smallText2" >
            Recently Played
          </p>
        </div>}

      </div>

      <div className="iconContainer">
        <div className="card-icon-box">
          <img src={book} alt="" />
          <p className="ssmallText" style={{ color: "#818386" }}>
            Lesson 01
          </p>
        </div>
        <div className="card-icon-box">
          <img src={clock} alt="" />
          <p className="ssmallText" style={{ color: "#818386" }}>
            30 Minutes
          </p>
        </div>
      </div>

      <h2 className="heading2">Introduction to User Interface Design</h2>
      {hideprogressbar ? null : <div className="Card-porgress-box">
        <div className="progressWrapper">
          <ProgressBar />
        </div>
        <p className="p2">54% Completed</p>
      </div>}

    </div>
  );
};

export default VideoCard;
