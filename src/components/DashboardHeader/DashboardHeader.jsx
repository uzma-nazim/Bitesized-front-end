import React from "react";
import DashboardSearch from "../../assets/DashboardSearch.svg";
import "./DashboardHeader.scss";
import DashboardNotification from "../../assets/DashboardNotification.svg";
import Dashboardemoji from "../../assets/Dashboardemoji.svg";
import { SlMenu } from "react-icons/sl";
import DownloadCSV from "../../assets/DownloadCSV.svg"

const DashboardHeader = ({HandleOpen , downloadcsv}) => {
  return (
    <div className="dashboarduserheader">
      <SlMenu className="slmenu" onClick={HandleOpen}/>
      <div className="dashheadinp">
        <img src={DashboardSearch} alt="" />
      <input className="searchmicroinput" type="text" placeholder="Search microcourse" />
      </div>
      <div>
        {downloadcsv ? <button className="CSVbtn">
          <img src={DownloadCSV} alt="" />
         <p>Download CSV</p>
        </button> : null} 
      </div>
      <div className="notiemoji">
        <img className="dashnoti" src={DashboardNotification} alt="" />
        <img className="dashemoji" src={Dashboardemoji} alt="" />
      </div>
    </div>
  );
};

export default DashboardHeader;
