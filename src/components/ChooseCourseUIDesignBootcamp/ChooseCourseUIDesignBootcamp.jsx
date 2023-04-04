import React from "react";
import "./ChooseCourseUIDesignBootcamp.scss";
import profile from "../../assets/profile2.png";
import dot from "../../assets/Ellipse 388.svg";
import thumbnail from "../../assets/videoThumnail.png";
import { FiChevronRight } from "react-icons/fi";
import onlystar from "../../assets/onlystar.svg";
import shareicon from "../../assets/shareicon.svg";
import playicon from "../../assets/playicon.svg";
import PurchasingCard from "../PurchasingCard/PurchasingCard";
import { useNavigate } from "react-router-dom";

const ChooseCourseUIDesignBootcamp = ({playlist}) => {
  const navigate = useNavigate()
  console.log(playlist.supply_list)
  console.log(playlist);
  const myArray=playlist.supply_list.split(",");
  return (
    <>
      <div className="maindiv">
        <div className="container ">
          <div className="forflex">
            <div className="UIDesignBootcamp">
              <div className="link-container">
                <a className="links" href="">
                  Design
                </a>

                <a className="links" href="">
                  <FiChevronRight
                    style={{ fontWeight: 600, fontSize: "15px" }}
                  />
                </a>

                <a className="links" href="">
                  UIUX Design
                </a>
              </div>

              <h1 className="headingDesignBootcamp">
                {playlist.micro_course}
              </h1>
              <p className="paraLevelup">
                Level up your design eye and improve your intuition to craft
                aesthetically satisfying UI Designs
              </p>
              <p className="ages">Ages: {playlist.age_group}</p>

              <div className="forflexstarsandrating">
                <div className="sta">
                  <img className="starrat" src={onlystar} alt="" />
                  <img className="starrat" src={onlystar} alt="" />
                  <img className="starrat" src={onlystar} alt="" />
                  <img className="starrat" src={onlystar} alt="" />
                  <img className="starrat" src={onlystar} alt="" />
                </div>
                <div>
                  <p className="rating"> (4.8 Rating) </p>
                </div>
              </div>
              <p className="peoplenums">100 Peoples Reviews</p>
              <p onClick={()=>navigate("/user-profile")} className="paraLevelup">
                <img className="profileChoose" src={profile} alt="" /> Esther
                Howard <img className="dot" src={dot} alt="" />{" "}
                <span className="viewInstructor">View Instructor Profile</span>
              </p>
              <div className="tagsmain">
              {
                myArray && myArray.length != 0 && myArray.map((val,i)=>{
                  return(
                    <div key={i}> 
                          <button>{val}</button>
                    </div>
                    

                    )
                })
              }
              </div>
            </div>
            <div className="purchasecardnone">
            <PurchasingCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCourseUIDesignBootcamp;
