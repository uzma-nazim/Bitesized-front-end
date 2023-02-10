import React from "react";
import "./Courses.scss";

import { FiChevronRight } from "react-icons/fi";
import porifle from "../../assets/profile2.png";
import Tags from "../Tags/Tags";
import ProgressBar from "../ProgressBar/ProgressBar";
import VideoCard from "../VideoCard/VideoCard";
import CardSlider from "../CardSlider/CardSlider";
const Courses = ({ hideLine }) => {
  return (
    <div className="container">
      <div className="link-container">
        <a className="links" href="">
          Design
        </a>

        <a className="links" href="">
          <FiChevronRight style={{ fontWeight: 600, fontSize: "15px" }} />
        </a>

        <a className="links" href="">
          UIUX Design
        </a>
      </div>

      <h1 className="heading1">
        UI Design Bootcamp. Master Typography, Colour & Grids
      </h1>

      <div className="profileContainer">
        <img src={porifle} alt="" />
        <p className="p1">Esther Howard</p>
      </div>
      <div className="tags-container">
        <Tags title={"#tag 1"} />
        <Tags title={"#tag 2"} />
        <Tags title={"#tag 3"} />
        <Tags title={"#tag 4"} />
      </div>
      <div className="courseDetailsWrapper">
        <div className="progreesWrapper">
          <ProgressBar />
        </div>
        <p className="p2">54% Completed</p>
        <button className="btn1">Resume</button>
      </div>
      <div className="cardRow">
        <CardSlider />
      </div>
      {/* <div className="cardRow">
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div> */}
      {hideLine ? null : <div className="bottomLine"></div>}
    </div>
  );
};

export default Courses;
