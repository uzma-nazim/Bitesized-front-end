import React from 'react'
import "./IstiaqSection.scss";
import handwave from "../../assets/handwave.png";

const IstiaqSection = () => {
  return (
    <div className='istiaqsectionstart'>
    <div className='container'>
        <div className='istiaqpadding'>
        <div className='handwaveflex'>
            <img src={handwave} alt="" />
            <h1>Hi, Istiaq!</h1>
        </div>
        <div>
            <p className='istiaqsectionpara'>Are you ready to upload your first bitesized course?</p>
        </div>
            </div>
    </div>
    </div>
  )
}

export default IstiaqSection