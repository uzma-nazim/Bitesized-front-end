import React from "react";
import './Meettheeducators.scss';
import prof1 from '../../assets/prof1.svg'
import prof2 from '../../assets/prof2.svg'
import prof3 from '../../assets/prof3.svg'
import prof4 from '../../assets/prof4.svg'

const Meettheeducators = ()=>{
    return(
        <div className="container meettheeducators">
            <div className="heading">
                <h1 className="homepageheading2">
                Meet The Educators
                </h1>
                <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nihil vitae eum ab saepe sapiente error eius ducimus impedit! Nobis,
                     nisi. Quos ex optio at, eaque minima omnis commodi repudiandae veritatis.</p>
            </div>
            <div className="staff">
                <div className="profile">
                    <img src={prof1} alt="" />
                    <h4>Dr. Jody Loves</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof2} alt="" />
                    <h4>Ram Shankar</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof3} alt="" />
                    <h4>Trip Roki</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof4} alt="" />
                    <h4>Roberta GSPI</h4>
                    <span>VP & Circulam Design</span>
                </div>
            </div>
        </div>
    )
}

export default Meettheeducators