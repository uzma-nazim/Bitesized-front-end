import React from "react";
import DashboardSearch from "../../assets/DashboardSearch.svg";
import "./DashboardHeader.scss";
import DashboardNotification from "../../assets/DashboardNotification.svg";
import Dashboardemoji from "../../assets/Dashboardemoji.svg";

const DashboardHeader = () => {
  return (
    <div className="dashboarduserheader">
      <div className="dashheadinp">
        <img src={DashboardSearch} alt="" />
      <input className="searchmicroinput" type="text" placeholder="Search microcourse" />
      </div>
      <div className="notiemoji">
        <img className="dashnoti" src={DashboardNotification} alt="" />
        <img className="dashemoji" src={Dashboardemoji} alt="" />
      </div>
    </div>
  );
};

export default DashboardHeader;
