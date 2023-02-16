import React from "react";
import './Educatoraccount.scss';
import visa from '../../assets/visa.svg'
import master from '../../assets/mastercard.svg'
import stripe from '../../assets/stripe.svg';
import book from '../../assets/Book-1.svg';
import help from '../../assets/Help-1.svg';
import logout from '../../assets/Logout-1.svg';
import setting from '../../assets/Settings-1.svg';


const Educatoraccount = () => {
    return (
        <div className="container">
            <h1 className="fontbold setting">Settings</h1>
            <div className="sub-main-container">
                <div className="tab-sec">
                    <button className="tab-button fontmed">Account</button>
                    <button className="tab-button">Payment Settings</button>
                </div>
                <div className="card-sec">
                    <h1 className="fontbold credit-heading">Credit/debit card</h1>
                    <div className="methods">
                        <div className="method-1"><img src={visa} alt="" /></div>
                        <div className="method-1"><img src={master} alt="" /></div>
                        <div className="method-1"><img src={stripe} alt="" /></div>
                    </div>
                    <div className="details">
                        <h2 className="detail-heading fontmed">Cardholder Name</h2>
                        <input className="detail-input fontmed" type="text" placeholder="Name surname" />
                    </div>
                    <div className="details">
                        <h2 className="detail-heading fontmed">Card Number</h2>
                        <input className="detail-input fontmed" type="text" placeholder="0000-0000-0000-0000" />
                    </div>
                    <div className="details">
                        <h2 className="detail-heading fontmed">Card Number</h2>
                        <input className="detail-input fontmed" type="text" placeholder="0000-0000-0000-0000" />
                    </div>
                    <div className="date">
                        <div className="date-1">
                            <h2 className="detail-heading fontmed">Expiration Date</h2>
                            <input className="detail-input fontmed" type="text" placeholder="MM/YY" />
                        </div>
                        <div className="date-1">
                            <h2 className="detail-heading fontmed">CVV</h2>
                            <input className="detail-input fontmed" type="text" placeholder="000" />
                        </div>
                    </div>
                    <button className="card-button fontmed">Get Paid</button>

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