import React from "react";
import './Educatoraccounttab1.scss';
import visa from '../../assets/visa.svg'
import master from '../../assets/mastercard.svg'
import stripe from '../../assets/stripe.svg';


const Educatoraccounttab1 = () => {

    return (

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
            <button className="card-button fontbold">Get Paid</button>

        </div>
    )
};

export default Educatoraccounttab1;














