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
import learnerwhite from "../../assets/learnerwhite.svg";
import paymentwhite from "../../assets/paymentwhite.svg";
import dashboardwhite from "../../assets/dashboardwhite.svg";

const DashboardSideBar = ({csvbtn}) => {
  const {pathname} = useLocation()
  const [toggle , settoggle] = useState(false)

  const HandleOpen = () =>{
    settoggle(true)
  }

  const HandleClosed = () =>{
    settoggle(false)
  }
  
  console.log(pathname)
  return (
    <>
    {csvbtn ? <DashboardHeader HandleOpen = {HandleOpen} downloadcsv/> : <DashboardHeader HandleOpen = {HandleOpen}/>}

    <div className="sidebar" 
    style={{left:window.innerWidth>1250? "0%" :toggle ? "0%" : "-100%"}}
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
              <img src={pathname == "/dashboard-user" ? dashboardwhite : dashboardlink} alt="" />
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
            <NavLink to="/learners" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={pathname == "/learners" ? learnerwhite : learnerslink} alt="" />
               <span className="dashboardspan">Learners</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/payments" className={({ isActive }) =>
                      isActive ? "dashboardactivelink" : "dashboardnavlink"
                    }>
              <img src={pathname == "/payments" ? paymentwhite : paymentslink} alt="" />
               <span className="dashboardspan">Payments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/liveandtrending" className={({ isActive }) =>
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
