import React from "react";
import "./CourseUserProfile.scss";
import Userprofile from "../../assets/Userprofile.svg";
import verified from "../../assets/verified.svg";
import star from "../../assets/star.svg";
import whiteStar from "../../assets/whiteStar.svg";
import pinkBook from "../../assets/pinkBook.svg";
import Playpink from "../../assets/Playpink.svg";

const CourseUserProfile = ({linkbtn}) => {
  return (
    <div className="userprofileBox">
      <div className="container  userprofilewrapper">
        <div className="userProfile">
          <div >
          <img className="usercourse" src={Userprofile} alt="" />
          </div>
          <div>
            <h3 className="heading3">Esther Howard</h3>
            <div className="verifyedBox">
              <img src={verified} alt="" />
              <p className="p3">Verified Educator</p>
            </div>
            <div className="averageRating">
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={whiteStar} alt="" />
              </div>
              <p className="p4">
                {" "}
                (4.8 Average of all the micro-courses ratings)
              </p>
            </div>
            <p className="p4">
                {" "}
                100 People reviews of all courses
              </p>
            <p className="p3 boldfamily blue followers">
              {" "}
              15 Followers
            </p>

            <div className="userprofileCourse">
              <div className="courseDetails">
                <img src={pinkBook} alt="" />
                <p className="p4 pink">20 Courses</p>
              </div>
              <div  className="courseDetails">
                <img src={Playpink} alt="" />
                <p className="p4 pink">Watch my Intro Video</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="cousrebtnCoutntry">

          <button className="largebluebtn">Follow Me</button>
          <button className="largebluebtn bg-pink">Watch my intro video</button>
          {linkbtn ?<button className="copyshare">Copy and share <div>profile link</div></button>:null}
          
        </div>
      </div>
    </div>
  );
};

export default CourseUserProfile;
