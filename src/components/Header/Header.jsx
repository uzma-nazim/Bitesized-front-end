import React from "react";
import "../../style/globalStyle.scss";
import "./header.scss";
import profile from "../../assets/profile.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
const Header = ({ userLogin, educatorLogin }) => {
  const navigate = useNavigate();
  return (
    <>
      {userLogin ? (
        <>
          <div className="headerContainer container">
            <div>
              <h1 className="logo">Bitesized</h1>
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
                <h1 className="logo">Bitesized</h1>
              </div>
              <div className="header-link">
                <ul>
                  <li>
                    <NavLink
                      to={"/create-profile"}
                      className={({ isActive }) =>
                        isActive ? "activeLink" : undefined
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <img src={profile} alt="" />
                  </li>
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
