import './MicrocourseCard.scss';
import React, { useRef, useState } from "react";
import thumbnail from "../../assets/videoThumnail.png";
import lock from "../../assets/lock.svg";

import { BsPlayFill } from "react-icons/bs";
import clock from "../../assets/clock.svg";
import book from "../../assets/book.svg";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import download from '../../assets/download.svg'
import upload from '../../assets/upload-frame.svg'
import profile from '../../assets/profile2.png'
import dot from '../../assets/Ellipse 388.svg'


export default function MicrocourseCard({ hideprogressbar, lockvideo, cardWidth, uploadvideo }) {
    return (
        <div>
            <div className={`videoCard ${cardWidth}`}>
                <div className="video-Box">
                    <video className="thumbnail" poster={thumbnail} width="100%" height="208">
                        <source type="video/mp4" src={""} />
                    </video>
                    {uploadvideo ?
                        <div className="playbtnwrapper blacklayer">
                            <div className="lockicon">
                                <img src={upload} alt="" />
                            </div>
                            <p className="course-card-text">
                                Watch 1st micro-lesson for free
                            </p>
                        </div>
                        :
                        <div className="playbtnwrapper blacklayer">
                            <div className="lockicon">
                                <img src={download} alt="" />
                            </div>
                            <p className="course-card-text">
                                Watch 1st micro-lesson for free
                            </p>
                        </div>}

                </div>

                {uploadvideo? <div className="upload-button">
                    <button>Upload Thumbnail</button>
                </div>:null}

                <h2 className="heading2 introduc-heading">Introduction to User Interface Design</h2>
                <div className="microcourse-cardprofile">
                    <img src={profile} alt="" />
                    <span className="name">Ester Howard  </span>
                    <img src={dot} alt="" />
                    <span className="microcourse-designation fontmed"> Design </span>
                </div>
                <div className="micro-profiletag">
                    <button className="micro-tags">#tag1</button>
                    <button className="micro-tags">#tag2</button>
                    <button className="micro-tags">#tag3</button>
                    <button className="micro-tags">#tagzaff4</button>
                </div>

            </div>
        </div>
    )
}
