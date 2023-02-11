import React, { useRef, useState } from "react";
import thumbnail from "../../assets/videoThumnail.png";
import "./Homepagecardsection.scss";


import { BsPlayFill } from "react-icons/bs";
import clock from "../../assets/clock.svg";
import user from "../../assets/Vector.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import profile from '../../assets/profile2.png'
import dot from '../../assets/Ellipse 388.svg'
import rating from '../../assets/Ratings.svg'
import CourseCard from "./CourseCard";



const Homepagecardsection = () => {
    const [play, setplay] = useState(false);

    const videoPlayer = useRef();
    const handlePlay = () => {
        videoPlayer.current.play();
        setplay(true);
    };
    return (
        <div className="container card-section">
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>
         <CourseCard/>

       
        </div>
    );
};

export default Homepagecardsection;
