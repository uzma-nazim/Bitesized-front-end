import React from "react";
import './Signupuser.scss'
import option1 from '../../assets/Group 1000001890.svg'
import option2 from '../../assets/Frame 1000001888.svg'

const Signupuser = () => {
    return (
        <div className=" maincontainer">
            <div className="subcontainer">
                <h1 className="selectheading">Select your who are you?</h1>
                <p className="selectpara">Select a profile type accordingly :</p>

                <div className="options">
                    <div className="option1">
                        <img src={option2} alt="" />
                        <h3>Educator</h3>
                        <p className="selectpara paraadjust">Create a seller profile</p>
                    </div>
                    <div className="option2">
                        <img src={option1} alt="" />
                        <h3>Educator</h3>
                        <p className="selectpara paraadjust">Create a seller profile</p>
                    </div>

                </div>
                <button className="selectbutton">Continue</button>
            </div>
        </div>
    )
}

export default Signupuser