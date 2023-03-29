import React, { useEffect, useRef, useState } from "react";
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
import { baseUrl, educator_playlist } from "../../urls";



const Homepagecardsection = () => {
    const [play, setplay] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    const videoPlayer = useRef();
    const handlePlay = () => {
        videoPlayer.current.play();
        setplay(true);
    };

    const educatorPlaylist = async () => {
        const res = await (
          await fetch(`${baseUrl}${educator_playlist}`, {
            method: "GET",
          })
        ).json();
        if (res.success == true) {
          setPlaylists(res.playlists);
        }
      };

      useEffect(() => {
        educatorPlaylist();
      }, [])
      
    return (
        <div className="container card-section">
            {
                playlists && playlists.map((val)=>{
                    return(
                        <CourseCard key={val._id} val={val}/>
                    )
                })
            }
        </div>
    );
};

export default Homepagecardsection;
