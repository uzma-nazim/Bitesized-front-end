import React, { useContext, useEffect } from "react";
import "./Dropdownmenu.scss";
import profileimage from "../../assets/avatar.svg";
import book from "../../assets/Book-1.svg";
import help from "../../assets/Help-1.svg";
import logoutIcon from "../../assets/Logout-1.svg";
import setting from "../../assets/Settings-1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { GlobalContext } from "../../contextapi/GlobalContext";
import { BiLogOut } from "react-icons/bi";
const clientId =
  "905812548501-re7cubnpr3tpfiv0qkcno8u2i7s8okgc.apps.googleusercontent.com";

const Dropdownmenu = () => {
  const navigate = useNavigate();

  const { users, setToken, logout } = useContext(GlobalContext);

  const onLogoutSuccess = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    navigate("/sign-in");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    //dropdown menu

    <div className="dropdown-sections">
      <div className="dropdown-1">
        <div>
          <img
            className="dropdown-avatar"
            src={profileimage}
            width="52px"
            alt=""
          />
        </div>
        <div>
          <h3 className="dropdownheading">Ben Mai</h3>
          <p className="dropdownpara">Student</p>
        </div>
      </div>
      <div className="dropdown-2">
        <div className="dropdown-items">
          <img src={book} alt="" />
          <p>My Bitesized Courses</p>
        </div>
        <div>
          <p className="items-2">9</p>
        </div>
      </div>
      <div className="dropdown-2">
        <div
          onClick={() => navigate("/educator-profile")}
          className="dropdown-items"
        >
          <img src={setting} alt="" />
          <p>Settings</p>
          {/* <NavLink to={"/educator-profile"}>Settings</NavLink> */}
        </div>
        <div>
          <p className="items-2">9</p>
        </div>
      </div>
      <div className="dropdown-2">
        <div className="dropdown-items">
          <img src={help} alt="" />
          <p>Help</p>
        </div>
        <div>
          <p className="items-2">9</p>
        </div>
      </div>
      <div className="dropdown-2 dropdown-3">
        {users.is_social == 1 ? (
          <div  style={{display:"flex" , gap:"14px", alignItems:"center"}}>
            <img src={logoutIcon} style={{width:'20px'}} alt="" />

          <GoogleLogout
            clientId={clientId}
            className="googlebtn"
            
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
          />
          </div>
        ) : (
          <div className="dropdown-items" onClick={logout}>
            <img src={logoutIcon} alt="" />
            <p>Logout</p>
          </div>
        )}

        <div>
          <p className="items-2">9</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdownmenu;
