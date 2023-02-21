import React from 'react'
import "./DashboardContentComponent.scss";
import Dashboarduserpic from "../../assets/Dashboarduserpic.svg";

const MicroApprovalContentComponent = () => {
  return (
    <div>
        <div className='userpiccontentflex'>
            <img src={Dashboarduserpic} alt="" />
            <div className='usernamecontent'>
                <h1>Istiaq Ahmed</h1>
                <p>Uploaded new micro-course for approval and edits</p>
            </div>
            <button className='dashviewhere'>View Here</button>
        </div>
    </div>
  )
}

export default MicroApprovalContentComponent;