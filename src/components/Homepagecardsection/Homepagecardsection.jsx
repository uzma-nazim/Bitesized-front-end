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



const Homepagecardsection = () => {
    const [play, setplay] = useState(false);

    const videoPlayer = useRef();
    const handlePlay = () => {
        videoPlayer.current.play();
        setplay(true);
    };
    return (
        <div className="container card-section">
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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

            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
            <div className="videoCard">
                <div className="video-Box">
                    <video ref={videoPlayer} poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    <div className="playbtnwrapper" style={{ opacity: play ? 0 : 1 }}>
                        <div onClick={handlePlay} className="outercolor">
                            <div className="playIcon">
                                <BsPlayFill />
                            </div>
                        </div>
                        <p className="smallText" style={{ color: "#fff", fontWeight: 500 }}>
                            Recently Played
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
                <div className="profile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard <img src={dot} alt="" /> </span>
                    <span className="designation"> Design <img src={dot} alt="" /></span>
                    <span className="age"> Ages 8-10</span>
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
        </div>
    );
};

export default Homepagecardsection;
