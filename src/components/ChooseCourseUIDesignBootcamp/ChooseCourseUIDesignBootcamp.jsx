import React from "react";
import "./ChooseCourseUIDesignBootcamp.scss";
import profile from '../../assets/profile2.png'
import dot from '../../assets/Ellipse 388.svg'
import rating from '../../assets/Ratings.svg'
import thumbnail from "../../assets/videoThumnail.png";

const ChooseCourseUIDesignBootcamp = ()=>{
    return(
        <>
        <div className="maindiv"> 
        <div className="container ">
            <div className="forflex">
            <div className="UIDesignBootcamp"> 
                <p className="DesignUIUX">Design  UIUX Design</p>
                <h1 className="headingDesignBootcamp">UI Design Bootcamp. Master Typography, Color & Grids</h1>
                <p className="paraLevelup">Level up your design eye and improve your intuition to craft aesthetically satisfying UI Designs</p>
                <p className="ages">Ages: 8-10</p>
                <p className="rating"> <img className="rating" src={rating} alt="" /><br /> 100 Peoples Reviews</p>
                <p className="paraLevelup"><img className="profileChoose" src={profile} alt="" /> Esther Howard <img className="dot" src={dot} alt="" />  <span className="viewInstructor">View Instructor Profile</span></p>
                <div className="tagsmain">
                    <button>#tag1</button>
                    <button>#tag2</button>
                    <button>#tag3</button>
                    <button>#tagzsff4</button>
                </div>
            </div>
            <div className="dollarssection">
            <video className="purchasevideocard" poster={thumbnail} height="278px" width="368px">
                        <source type="video/mp4" src={""} />
                    </video>
                <p className="oldkids">For 8-10 years old kids.</p>
                <p className="dollars">$100.00</p>
                <div className="purchase">
                <button className="purchasecourse">Purchase Course</button>
                </div>
                <ul className="lessons">
                    <li><img className="dot" src={dot} alt="" /> 6 lessons</li>
                    <li><img className="dot" src={dot} alt="" /> 20 Hours Duration</li>
                    <li><img className="dot" src={dot} alt="" /> 2000 People Purchased</li>
                    <li><img className="dot" src={dot} alt="" /> Full Lifetime access</li>
                    <li><img className="dot" src={dot} alt="" /> Access on mobile and TV</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default ChooseCourseUIDesignBootcamp;