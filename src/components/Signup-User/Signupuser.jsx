import React, { useState } from "react";
import "./Signupuser.scss";
import option1 from "../../assets/Group 1000001890.svg";
import option2 from "../../assets/Frame 1000001888.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signupuser = () => {
  const navigate = useNavigate();
  const [selectProfile, setSelectProfile] = useState(0);

  const handleSelectProfile = async () => {
    if(selectProfile == 1){
        navigate("/aducator-signup")
    }else if(selectProfile == 2){
        navigate('/learner-signup')
    }else{
        toast.error("Please select who are you ")
    }
  };

  const changeColor = async (value) => {
    setSelectProfile(value);
  };
  // ()=>
  return (
    <div className=" signupContainer">
      <div className="subcontainer">
        <h1 className="selectheading">Select your who are you?</h1>
        <p className="selectpara">Select a profile type accordingly :</p>

        <div className="options">
          <div
            onClick={() => {
              changeColor(1);
            }}
            className={` option1 ${selectProfile == 1 ? "change_border" : ''}`}
          >
            <img src={option2} alt="" />
            <h3>Educator</h3>
            <p className="selectpara paraadjust">Create a seller profile</p>
          </div>
          <div
            onClick={() => {
              changeColor(2);
            }}
            className={` option1 ${selectProfile == 2 ? "change_border" : ''}`}
          >
            <img src={option1} alt="" />
            <h3>Learner</h3>
            <p className="selectpara paraadjust">Create a seller profile</p>
          </div>
        </div>
        <button className="selectbutton" onClick={handleSelectProfile}>Continue</button>
      </div>
    </div>
  );
};

export default Signupuser;
