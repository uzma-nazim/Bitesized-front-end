import React, { useContext } from "react";
import "./Createprofileeducator.scss";
import camera from "../../assets/camera.svg";
import exportsvg from "../../assets/export.svg";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contextapi/GlobalContext";
import { useState } from "react";
import axios from 'axios'
import { baseUrl, educatorProfile } from "../../urls";
import EducatorProfilePic from "../EducatorProfilePic";

const Createprofileeducator = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    education_background: "",
    experience: "",
    about: "",
    fun_fact_about: "",
    learn_as_a_kid: "",
  });

  const [showImage, setShowImage] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [video, setVideo] = useState(null);

  const handleProfileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setShowImage(URL.createObjectURL(e.target.files[0])) 
    setProfilePic(selectedFile)
  };

  const handleVideo = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setVideo(selectedFile)
  };

  const inputHandle=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setProfile({...profile,[name]:value});
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata=new FormData();
    formdata.append('first_name',profile.first_name);
    formdata.append('last_name',profile.last_name);
    formdata.append('profile',profilePic);
    formdata.append('video',video);
    formdata.append('education_background',profile.education_background);
    formdata.append('experience',profile.experience);
    formdata.append('about',profile.about);
    formdata.append('fun_fact_about',profile.fun_fact_about);
    formdata.append('learn_as_a_kid',profile.learn_as_a_kid);
    console.log(profilePic)
    console.log(video)

    const config={
        headers:{
            'user_access_token':localStorage.getItem('token'),
        }
    }

    const res=await axios.post(`${baseUrl}${educatorProfile}`,formdata,config);
    console.log(res)

  }

  return (
    <div className="Createprofileeducator-main">
      <h1 className="fontbold educatorprof">Create Educator Profile</h1>
      <div className="educatorform">
        <form
          onSubmit={handleSubmit}
          method="post"
        >
          <EducatorProfilePic showImage={showImage} camera={camera} handleProfileChange={handleProfileChange} />
          <div className="namesection">
            <div className="input-sec">
              <p className="name-tag fontmed">First Name</p>
              <input className="name-input" value={profile.first_name} name="first_name" onChange={inputHandle} placeholder="Istiaq" type="text" />
            </div>
            <div className="input-sec">
              <p className="name-tag fontmed">Last Name</p>
              <input  onChange={inputHandle} value={profile.last_name} name="last_name" className="name-input" placeholder="Ahmed" type="text" />
            </div>
          </div>
          <div className="input-sec">
            <p className="name-tag fontmed">Education Background</p>

            <textarea
              className="decription1"
              onChange={inputHandle}
              placeholder="Describe your education background (where you attend(ed) university, when you graduated (if you have), what you study/studied, extracurriculars you aree/were involved in)"
              name="education_background"
              id=""
              value={profile.education_background}
            ></textarea>
          </div>
          <div className="input-sec">
            <p className="name-tag fontmed">Kids Tutoring Experience</p>

            <textarea
              className="decription2"
              onChange={inputHandle}
              placeholder="Describe your experience with educating kids (summer camps, tutoring, teaching, etc)"
              name="experience"
              id=""
              value={profile.experience}
            ></textarea>
          </div>
          <div className="input-sec">
            <p className="name-tag fontmed">What are you passionate about?</p>

            <textarea
              className="decription3"
              onChange={inputHandle}
              placeholder="What are you passionate about, what are you looking forward to teaching?"
              name="about"
              id=""
              value={profile.about}
            ></textarea>

          </div>
          <div className="input-sec">
            <p className="name-tag fontmed">What is the fun fact about you?</p>

            <textarea
              className="decription4"
              placeholder="Tell us fun fact about you"
              name="fun_fact_about"
              id=""
              onChange={inputHandle}
              value={profile.fun_fact_about}
            ></textarea>
          </div>
          <div className="input-sec">
            <p className="name-tag fontmed">
              What do you wish you learned as a kid?
            </p>

            <textarea
              className="decription4"
              placeholder="Describe your wish"
              name="learn_as_a_kid"
              onChange={inputHandle}
              value={profile.learn_as_a_kid}
              id=""
            ></textarea>
          </div>
          <div className="namesection">
            <p className="name-tag fontmed">
              Upload a short video about yourself answering the following
              questions: Your name, where you go/went to school, what you are
              excited to teach, describe a fun project the kids will be doing in
              your course.
            </p>
          </div>
          <label htmlFor="upload-file" className="video-tag">
            <img src={exportsvg} alt="" />
            <input type="file" name="video" onChange={handleVideo} id="upload-file" hidden />
          </label>

          <button type="submit" className="educator-button fontbold">
            Submit and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createprofileeducator;
