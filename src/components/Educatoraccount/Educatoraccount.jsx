import React from "react";
import './Educatoraccount.scss';
import visa from '../../assets/visa.svg'
import master from '../../assets/mastercard.svg'
import stripe from '../../assets/stripe.svg';
import book from '../../assets/Book-1.svg';
import help from '../../assets/Help-1.svg';
import logout from '../../assets/Logout-1.svg';
import setting from '../../assets/Settings-1.svg';
import banner from '../../assets/Banner.svg';
import Camerabutton from '../../assets/Camera button.svg';
import profilecamera from '../../assets/profile-camera.svg';
import ProfileImage from '../../assets/Profile Image.svg';
import Educatoraccounttab1 from "./Educatoraccounttab1";
import Educatoraccounttab2 from "./Educatoraccounttab2";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const Educatoraccount = () => {
    return (
        <div className="container main-container-account">
            <h1 className="fontbold setting">Settings</h1>
            <div className="sub-main-container">
                <div className="tab-sec">
                    <button  className="tab-button fontmed">Account</button>
                    <button  className="tab-button">Payment Settings</button>

                </div>
               


                <div className="secondcomponent">
                    <Educatoraccounttab2/>
                </div>



            </div>
        </div>

        //dropdown menu


        // <div className="dropdown">
        //     <div className="dropdown-1">
        //         <div><img src={master} width="52px" alt="" /></div>
        //         <div>
        //             <h3 className="dropdownheading">Ben Mai</h3>
        //             <p className="dropdownpara">Student</p>
        //         </div>
        //     </div>
        //     <div className="dropdown-2">
        //         <div className="dropdown-items">
        //             <img src={book} alt="" />
        //             <p>My Bitesized Courses</p>
        //         </div>
        //         <div><p className="items-2">9</p></div>
        //     </div>
        //     <div className="dropdown-2">
        //         <div className="dropdown-items">
        //             <img src={setting} alt="" />
        //             <p>Settings</p>
        //         </div>
        //         <div><p className="items-2">9</p></div>
        //     </div>
        //     <div className="dropdown-2">
        //         <div className="dropdown-items">
        //             <img src={help} alt="" />
        //             <p>Help</p>
        //         </div>
        //         <div><p className="items-2">9</p></div>
        //     </div>
        //     <div className="dropdown-2">
        //         <div className="dropdown-items">
        //             <img src={logout} alt="" />
        //             <p>Logout</p>
        //         </div>
        //         <div><p className="items-2">9</p></div>
        //     </div>

        // </div>
    )
}

export default Educatoraccount;