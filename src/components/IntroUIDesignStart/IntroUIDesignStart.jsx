import React from "react";
import { FiChevronRight } from "react-icons/fi";
import introtoUIthumbnail from "../../assets/introtoUIthumbnail.png";
import "./IntroUIDesignStart.scss";
import howtodoeverything from "../../assets/howtodoeverything.svg";
import howtodo2 from "../../assets/howtodo2.svg";
import howtocreatecourse from "../../assets/howtocreatecourse.svg";
import learningpaths from "../../assets/learningpaths.svg";
import smartassigning from "../../assets/smartassigning.svg";
import manageuser from "../../assets/manageuser.svg";
import tracktraining from "../../assets/tracktraining.svg";
import coursesetting from "../../assets/coursesetting.svg";


const IntroUIDesignStart = () => {
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

        <a className="links" href="">
          <FiChevronRight style={{ fontWeight: 600, fontSize: "15px" }} />
        </a>

        <a className="links" href="">
          Lesson 1
        </a>
      </div>

      <div className="introUIflex">

        <div>
          <h1 className="heading3">Introduction to User Interface Design</h1>
          <video 
          className="introtoUIthumbnail"
          poster={introtoUIthumbnail}
          controls>
            <source type="video/mp4" src={""} />
          </video>
          <p className="uidesignpara">
            UI designers need to make sure the visual language they choose fits
            the class of application they’re writing. They’re trying to predict
            user expectations. If your team is designing a travel app, it’s
            important to research how other travel apps have been developed in
            the past. Which ones worked? Which ones didn’t? There are design
            lessons to be learned from the work others have done before.  <br /><br />
            Research might indicate that people prefer outlined icons instead of
            bold shapes. This is a visual shorthand that people are comfortable
            with and enjoy. UI designers would then do well to incorporate that
            lesson.
          </p>
        </div>

        <div>
          <p className="lessontime">6 Lessons (20h 10m)</p> <hr />

          <p className="lessonintro">Introduction</p>
          <div className="howtodoeverythingflex2">
            <img src={howtodoeverything} alt="" />
            <p className="bolding">How to do every thing in Learning <br /> <span className="forgrey">12:47</span></p>
          </div>

          <p className="lessonintro2">Get Going</p>
          <div className="howtodoeverythingflex">
            <img src={howtodo2} alt="" />
            <p className="bolding">How to do every thing in Learning <br /> <span className="forgrey">09:23</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={howtocreatecourse} alt="" />
            <p className="bolding">How to create courses <br /> <span className="forgrey">07:21</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={learningpaths} alt="" />
            <p className="bolding">How to create learning paths <br /> <span className="forgrey">15:11</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={smartassigning} alt="" />
            <p className="bolding">How to use smart assigning <br /> <span className="forgrey">14:24</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={manageuser} alt="" />
            <p className="bolding">How to manage users <br /> <span className="forgrey">17:46</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={tracktraining} alt="" />
            <p className="bolding">How to track training completions <br /> <span className="forgrey">11:31</span></p>
          </div>

          <div className="howtodoeverythingflex">
            <img src={coursesetting} alt="" />
            <p className="bolding">Course setting <br /> <span className="forgrey">14:24</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroUIDesignStart;
