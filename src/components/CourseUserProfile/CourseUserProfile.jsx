import React, { useState, useEffect } from "react";
import "./CourseUserProfile.scss";
import Userprofile from "../../assets/Userprofile.svg";
import verified from "../../assets/verified.svg";
import star from "../../assets/star.svg";
import whiteStar from "../../assets/whiteStar.svg";
import pinkBook from "../../assets/pinkBook.svg";
import Playpink from "../../assets/Playpink.svg";
import { baseUrl, followed, getProfileEducator, imagePath, is_followed, total_follower, unfollowed } from "../../urls";
import { toast } from "react-toastify";
import { ColorRing } from 'react-loader-spinner'

const CourseUserProfile = ({ linkbtn }) => {
  const [profile, setProfile] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    profile:'',
  });

  const [isDataFollowed, setIsDataFollowed] = useState(0);
  const [totalFollower, setTotalFollower] = useState(0);
  const [totalCourse, setTotalCourse] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getEducatorProfile = async () => {
    const res = await (
      await fetch(`${baseUrl}${getProfileEducator}`, {
        method: "GET",
        headers: {
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if (res.success == true && res.educator_profile != null) {
      setProfile({
        user_id: res.educator_profile.educator,
        first_name: res.educator_profile.first_name,
        last_name: res.educator_profile.last_name,
        profile: res.educator_profile.profile,
      });
      // setProfilePic({
      //   image: res.educator_profile.profile,
      //   video: res.educator_profile.video,
      // });
    }
  };

  const getIsFollowed=async(id)=>{
    const res = await (
      await fetch(`${baseUrl}${is_followed}${id}`, {
        method: "GET",
        headers: {
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if(res.success){
        setIsDataFollowed(res.is_followed.followed)
    }
  }

  const getTotalFollower=async(id)=>{
    const res = await (
      await fetch(`${baseUrl}${total_follower}${id}`, {
        method: "GET",
        headers: {
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if(res.success){
      setTotalFollower(res.total_follower)
      setTotalCourse(res.total_course)
    }
  }

  useEffect(() => {
    getEducatorProfile();
    getIsFollowed(profile.user_id);
    getTotalFollower(profile.user_id)
  }, []);

  const followedUser = async () => {
    setIsLoading(true);
    const res1 = await (
      await fetch(`${baseUrl}${followed}`, {
        method: "POST",
        body: JSON.stringify({ follow_to: profile.user_id }),
        headers: {
          "Content-Type": "application/json",
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if(res1.success){
        getIsFollowed(profile.user_id)
        getTotalFollower(profile.user_id)
        toast.success(res1.message);
    }else{
      toast.error(res1.message);
    }
    setIsLoading(false)
  };

  const unFollowedUser = async () => {
    setIsLoading(true)
    const res1 = await (
      await fetch(`${baseUrl}${unfollowed}`, {
        method: "POST",
        body: JSON.stringify({ follow_to: profile.user_id }),
        headers: {
          "Content-Type": "application/json",
          user_access_token: localStorage.getItem("token"),
        },
      })
    ).json();
    if(res1.success){
      setIsDataFollowed(0)
      getIsFollowed(profile.user_id)
      getTotalFollower(profile.user_id)
        toast.success(res1.message);
    }else{
      toast.error(res1.message);
    }
    setIsLoading(false)
  };
  return (
    <div className="userprofileBox">
      <div className="container  userprofilewrapper">
        <div className="userProfile">
          <div>
            <img className="usercourse" src={`${baseUrl}/uploads/${profile.profile}`} alt="" />
          </div>
          <div>
            <h3 className="heading3">
              {profile.first_name} {profile.last_name} 
            </h3>
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
                (4.8 Average of all the micro-courses ratings)
              </p>
            </div>
            <p className="p4">100 People reviews of all courses</p>
            <p className="p3 boldfamily blue followers">{totalFollower} Followers</p>

            <div className="userprofileCourse">
              <div className="courseDetails">
                <img src={pinkBook} alt="" />
                <p className="p4 pink">{totalCourse} Courses</p>
              </div>
              <div className="courseDetails">
                <img src={Playpink} alt="" />
                <p className="p4 pink">Watch my Intro Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cousrebtnCoutntry">
          {
            isDataFollowed == 1
            ?<button className="largebluebtn"  onClick={unFollowedUser}>
            {
              isLoading 
              ?<ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
              :"Unfollow Me"
            }
          </button>
            :<button className="largebluebtn" onClick={followedUser}>
            { isLoading 
              ?<ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
              :"Follow Me"}
          </button>
          }
          
          <button className="largebluebtn bg-pink">Watch my intro video</button>
          {linkbtn ? (
            <button className="copyshare">
              Copy and share <div>profile link</div>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CourseUserProfile;
