import React, { useRef, useState } from "react";
import thumbnail from "../../assets/videoThumnail.png";
import "./videoCard.scss";


import { BsPlayFill } from "react-icons/bs";
import clock from "../../assets/clock.svg";
import book from "../../assets/book.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
const VideoCard = () => {
  const [play, setplay] = useState(false);

  const videoPlayer = useRef();
  const handlePlay = () => {
    videoPlayer.current.play();
    setplay(true);
  };
  return (
    <div className="videoCard">
      <div className="video-Box">
        <video  ref={videoPlayer} poster={thumbnail} width="100%" height="208">
          <source type="video/mp4" src={""} />
        </video>
        <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
          <div onClick={handlePlay} className="outercolor">
            <div className="playIcon">
              <BsPlayFill />
            </div>
          </div>
          <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
            Recently Played
          </p>
        </div>
      </div>

      <div className="iconContainer">
        <div className="card-icon-box">
          <img src={book} alt="" />
          <p className="ssmallText" style={{ color: "#818386" }}>
            {" "}
            Lesson 01
          </p>
        </div>
        <div className="card-icon-box">
          <img src={clock} alt="" />
          <p className="ssmallText" style={{ color: "#818386" }}>
            {" "}
            30 Minutes
          </p>
        </div>
      </div>

      <h2 className="heading2">Introduction to User Interface Design</h2>
      <div className="Card-porgress-box">
        <div className="progressWrapper">
          <ProgressBar />
        </div>
        <p className="p2">54% Completed</p>
      </div>
    </div>
  );
};

export default VideoCard;
