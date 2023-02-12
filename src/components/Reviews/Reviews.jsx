import "./Reviews.scss";
import onlystar from "../../assets/onlystar.svg";

import React from "react";

const Reviews = ({picture , name , date}) => {
  return (
    <div className="container">
        <div className="fordaysflex">
    <div className="forprofileflex">
      <div>
        <img className="profiles" src={picture} alt="" />
      </div>
      <div className="userheading">
        <p>{name}</p>
        <div>
          <img className="formarginrightstar" src={onlystar} alt="" />
          <img className="formarginrightstar" src={onlystar} alt="" />
          <img className="formarginrightstar" src={onlystar} alt="" />
          <img className="formarginrightstar" src={onlystar} alt="" />
          <img className="formarginrightstar" src={onlystar} alt="" />
        </div>
      </div>
    </div>
    <h1>{date}</h1>
    </div>
      <p className="review">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
};

export default Reviews;
