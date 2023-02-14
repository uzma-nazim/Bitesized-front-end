import React from 'react'
import thumbnail from "../../assets/videoThumnail.png";


import { BsPlayFill } from "react-icons/bs";
import clock from "../../assets/clock.svg";
import user from "../../assets/Vector.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import profile from '../../assets/profile2.png'
import dot from '../../assets/Ellipse 388.svg'
import rating from '../../assets/Ratings.svg'
import { useNavigate } from 'react-router-dom';


const CourseCard = () => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate("/choose-course-user")} className="videoCard">
            <div className="video-Box">
                <video  poster={thumbnail} width="100%" height="208">
                    <source type="video/mp4" src={""} />
                </video>
                <div className="playbtnwrapper" >
                    <div className="outercolor">
                        <div className="playIcon">
                            <BsPlayFill />
                        </div>
                    </div>
                    <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>

                    </p>
                </div>
            </div>

            <div className="iconContainer">
                <div className="card-icon-box">
                    <img src={user} alt="" />
                    <p className="ssmallText" style={{ color: "#818386" }}>
                        {" "}
                        23455 Students
                    </p>
                </div>
                <div className="card-icon-box">
                    <img src={clock} alt="" />
                    <p className="ssmallText" style={{ color: "#818386" }}>
                        {" "}
                        12 July 2023
                    </p>
                </div>
            </div>

            <h2 className="heading2">Introduction to User Interface Design</h2>
            <div className="cardprofile">
                <img src={profile} alt="" />
                <span className="name">Ester Howard  </span>
                <img src={dot} alt="" />
                <span className="designation"> Design </span>
                <img src={dot} alt="" />
                <span className="age"> Ages: 8-10</span>
            </div>
            <div className="rating">
                <img src={rating} alt="" />
            </div>
            <div className="profiletag">
                <button className="tags">#tag1</button>
                <button className="tags">#tag2</button>
                <button className="tags">#tag3</button>
                <button className="tags">#tagzaff4</button>
            </div>

        </div>
    )
}

export default CourseCard
