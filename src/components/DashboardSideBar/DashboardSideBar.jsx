import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./DashboardSideBar.scss";
import dashboardlink from "../../assets/dashboardlink.svg";
import microcourseapprovalgrey from "../../assets/microcourseapprovalgrey.svg";
import educatorslink from "../../assets/educatorslink.svg";
import learnerslink from "../../assets/learnerslink.svg";
import paymentslink from "../../assets/paymentslink.svg";
import liveandtrendinglink from "../../assets/liveandtrendinglink.svg";
import microapprovalwhite from "../../assets/microapprovalwhite.svg";
import { RxCrossCircled } from "react-icons/rx";
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import educatorwhite from "../../assets/educatorwhite.svg"

const DashboardSideBar = () => {
  const {pathname} = useLocation()
  const [toggle , settoggle] = useState(true)

  const HandleOpen = () =>{
    settoggle(true)
  }

  const HandleClosed = () =>{
    settoggle(false)
  }
  
  console.log(pathname)
  return (
    <>
    <DashboardHeader HandleOpen = {HandleOpen} downloadcsv/>
    <div className="sidebar" 
    style={{left:toggle ? "0%" : "-100%"}}
    >
      <div className="mainrxcross">
      <RxCrossCircled className="rxcross" onClick={HandleClosed}/>
      </div>
      <h1 className="bitesizeddashboard">Bitesized</h1>
      <div className="dashboardslide">
        <ul>
          <li>
            <NavLink to="/dashboard-user" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    } >
              <img src={dashboardlink} alt="" />
               <span className="dashboardspan">DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/microcourse-approval" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={pathname == "/microcourse-approval" ? microapprovalwhite : microcourseapprovalgrey} alt="" />
               <span className="dashboardspan">Microcourse Approval</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/educators" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={pathname == "/educators" ? educatorwhite : educatorslink} alt="" />
               <span className="dashboardspan">Educators</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasdsadasds" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={learnerslink} alt="" />
               <span className="dashboardspan">Learners</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasdsadasds" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={paymentslink} alt="" />
               <span className="dashboardspan">Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dasdsadasds" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={liveandtrendinglink} alt="" />
               <span className="dashboardspan">Live and Trending Microcourse</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};


export default DashboardSideBar;
