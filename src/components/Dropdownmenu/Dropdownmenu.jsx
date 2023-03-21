import React from "react";
import './Dropdownmenu.scss';
import profileimage from "../../assets/avatar.svg";
import book from '../../assets/Book-1.svg';
import help from '../../assets/Help-1.svg';
import logout from '../../assets/Logout-1.svg';
import setting from '../../assets/Settings-1.svg';
import { NavLink, useNavigate } from "react-router-dom";



const Dropdownmenu = () => {
    const navigate = useNavigate()
    
    return (
        
        //dropdown menu


        <div className="dropdown-sections">
            <div className="dropdown-1">
                <div><img className="dropdown-avatar" src={profileimage} width="52px" alt="" /></div>
                <div>
                    <h3 className="dropdownheading">Ben Mai</h3>
                    <p className="dropdownpara">Student</p>
                </div>
            </div>
            <div className="dropdown-2">
                <div className="dropdown-items">
                    <img src={book}  alt="" />
                    <p>My Bitesized Courses</p>
                </div>
                <div><p className="items-2">9</p></div>
            </div>
            <div className="dropdown-2">
                <div onClick={()=>navigate("/educator-profile")} className="dropdown-items">
                    <img src={setting}  alt="" />
                    <p >Settings</p>
                    {/* <NavLink to={"/educator-profile"}>Settings</NavLink> */}
                </div>
                <div><p className="items-2">9</p></div>
            </div>
            <div className="dropdown-2">
                <div className="dropdown-items">
                    <img src={help}  alt="" />
                    <p>Help</p>
                </div>
                <div><p className="items-2">9</p></div>
            </div>
            <div className="dropdown-2 dropdown-3">
                <div className="dropdown-items">
                    <img src={logout}  alt="" />
                    <p>Logout</p>
                </div>
                <div><p className="items-2">9</p></div>
            </div>

        </div>
    )
}

export default Dropdownmenu;