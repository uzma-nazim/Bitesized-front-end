import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardSideBar.scss";
import dashboardlink from "../../assets/dashboardlink.svg";
import microcourseapprovalgrey from "../../assets/microcourseapprovalgrey.svg";
import educatorslink from "../../assets/educatorslink.svg";
import learnerslink from "../../assets/learnerslink.svg";
import paymentslink from "../../assets/paymentslink.svg";
import liveandtrendinglink from "../../assets/liveandtrendinglink.svg";

const DashboardSideBar = () => {
  return (
    <div className="sidebar">
      <h1 className="bitesizeddashboard">Bitesized</h1>
      <div className="dashboardslide">
        <ul>
          <li>
            <NavLink  className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    } >
              <img src={dashboardlink} alt="" />
               <span className="dashboardspan">DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={microcourseapprovalgrey} alt="" />
               <span className="dashboardspan">Microcourse Approval</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={educatorslink} alt="" />
               <span className="dashboardspan">Educators</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={learnerslink} alt="" />
               <span className="dashboardspan">Learners</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={paymentslink} alt="" />
               <span className="dashboardspan">Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={liveandtrendinglink} alt="" />
               <span className="dashboardspan">Live and Trending Microcourse</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSideBar;
