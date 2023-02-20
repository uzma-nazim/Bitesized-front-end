import React, { useState } from "react";
import "../../style/globalStyle.scss";
import "./header.scss";
import profile from "../../assets/profile.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Dropdownmenu from "../../components/Dropdownmenu/Dropdownmenu";
const Header = ({ userLogin, educatorLogin, educatorProfile }) => {
  const [open, setopen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {userLogin ? (
        <>
          <div className="headerContainer container">
            <div>
            <NavLink to={"/"}>
              <h1 className="logo">Bitesized</h1>
              </NavLink>
            </div>
            <div className="header-link">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeLink" : undefined
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/my-courese"}
                    className={({ isActive }) =>
                      isActive ? "activeLink" : undefined
                    }
                  >
                    My Courses
                  </NavLink>
                </li>
                <li>
                  <img src={profile} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : educatorLogin ? (
        <>
          <div className="headerBoxShadow">
            <div className="headerContainer container ">
              <div>
                <NavLink to={"/"}>
                  <h1 className="logo">Bitesized</h1>
                </NavLink>
              </div>
              <div className="header-link">
                <ul>
                  <li>
                    <NavLink
                      to={"/create-profile"}
                      className={({ isActive }) =>
                        isActive ? "activeLink" : "activeLink"
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li
                    onClick={() => setopen(!open)}
                    className="dropdown-adjust"
                  >
                    <img src={profile} alt="" />
                    <div
                      style={{ display: open ? "block" : "none" }}
                      className="dropdown-adjust2"
                    >
                      <Dropdownmenu />
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : educatorProfile ? (
        <>
          <div className="">
            <div className="headerContainer container ">
              <div>
              <NavLink to={"/"}>
                <h1 className="logo">Bitesized</h1>
                </NavLink>
              </div>
              <div className="header-link">
                <ul>
                  <li>
                    <NavLink
                      to={"/create-profile"}
                      className={({ isActive }) =>
                        isActive ? "activeLink" : "activeLink"
                      }
                    >
                      My Course
                    </NavLink>
                  </li>
                  <li
                    onClick={() => setopen(!open)}
                    className="dropdown-adjust"
                  >
                    <img src={profile} alt="" />
                    <div
                      style={{ display: open ? "block" : "none" }}
                      className="dropdown-adjust2"
                    >
                      <Dropdownmenu />
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container headerContainer">
            <div>
              <h1 className="logo">Bitesized</h1>
            </div>
            <div className="header-link">
              <ul>
                <li>
                  <NavLink
                    to={"/aducator-signup"}
                    className={({ isActive }) =>
                      isActive ? "activeLink" : undefined
                    }
                  >
                    Sign Up as a Educator
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/sign-up")}
                    className="bluebutton textadjust"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
