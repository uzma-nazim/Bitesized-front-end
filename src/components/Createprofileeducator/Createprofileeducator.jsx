import React from "react";
import './Createprofileeducator.scss';
import camera from '../../assets/camera.svg'
import exportsvg from '../../assets/export.svg'


const Createprofileeducator = () => {
    return (
        <div className="Createprofileeducator-main">
            <h1 className="fontbold educatorprof">Create Educator Profile</h1>
            <div className="educatorform">
                <form action="">

                    <label htmlFor="upload-file">
                        <img src={camera} alt="" width="160px" />
                        <h3 className="image-heading fontbold">Upload your picture</h3>
                        <input type="file" name="" id="upload-file" hidden />
                    </label>
                    <div className="namesection">
                        <div className="input-sec">
                            <p className="name-tag fontmed">First Name</p>
                            <input className="name-input" placeholder="Istiaq" type="text" />
                        </div>
                        <div className="input-sec">
                            <p className="name-tag fontmed">Last Name</p>
                            <input className="name-input" placeholder="Ahmed" type="text" />
                        </div>
                    </div>
                    <div className="input-sec">
                        <p className="name-tag fontmed">Education Background</p>
                      
                         <textarea className="decription1" placeholder="Describe your education background (where you attend(ed) university, when you graduated (if you have), what you study/studied, extracurriculars you aree/were involved in)" name="" id=""></textarea>
                    </div>
                    <div className="input-sec">
                        <p className="name-tag fontmed">Kids Tutoring Experience</p>
                      
                         <textarea className="decription2" placeholder="Describe your experience with educating kids (summer camps, tutoring, teaching, etc)" name="" id=""></textarea>
                    </div>
                    <div className="input-sec">
                        <p className="name-tag fontmed">What are you passionate about?</p>
                      
                         <textarea className="decription3" placeholder="What are you passionate about, what are you looking forward to teaching?" name="" id=""></textarea>
                    </div>
                    <div className="input-sec">
                        <p className="name-tag fontmed">What is the fun fact about you?</p>
                      
                         <textarea className="decription4" placeholder="Tell us fun fact about you" name="" id=""></textarea>
                    </div>
                    <div className="input-sec">
                        <p className="name-tag fontmed">What do you wish you learned as a kid?</p>
                      
                         <textarea className="decription4" placeholder="Describe your wish" name="" id=""></textarea>
                    </div>
                    <div className="namesection">
                        <p className="name-tag fontmed">Upload a short video about yourself answering the following questions: Your name, where you go/went to school, what you are excited to teach, describe a fun project the kids will be doing in your course. </p>
                      
                    
                    </div>
                    <label htmlFor="upload-file" className="video-tag">
                        <img src={exportsvg} alt=""  />
                        <input type="file" name="" id="upload-file" hidden />
                    </label>

                    <button className="educator-button fontbold">Submit and Continue</button>

                </form>

            </div>
        </div>
    )
}

export default Createprofileeducator;