import React, { useEffect, useState } from "react";
import './Meettheeducators.scss';
import prof1 from '../../assets/prof1.svg'
import prof2 from '../../assets/prof2.svg'
import prof3 from '../../assets/prof3.svg'
import prof4 from '../../assets/prof4.svg'
import { all_educator, baseUrl } from "../../urls";

const Meettheeducators = ()=>{
    const [educators, setEducators] = useState([]);

    const getAllEducator= async () => {
        const res = await (
          await fetch(`${baseUrl}${all_educator}`, {
            method: "GET",
          })
        ).json();
        if (res.success == true) {
          setEducators(res.educators);
        }
      };

      useEffect(() => {
        getAllEducator();
      }, [])
    return(
        <div className="container meettheeducators">
            <div className="heading headingcontainer">
                <h1 className="homepageheading2">
                Meet The Educators
                </h1>
                <p className="details">Our learning experts are parents, teachers, designers, and makers with backgrounds in early child development.</p>
            </div>
            <div className="staff">
                {/* {educators &&
          educators.map((val) => {
            return (
              <div className="profile" key={val._id}>
                <img src={`${baseUrl}/uploads/${val.profile}`} style={{ width:"20%" }} alt="" />
                <h4 className="heading4">{val.first_name} {val.last_name}</h4>
              </div>
            );
          })} */}
                <div className="profile">
                    <img src={prof1} alt="" />
                    <h4 className="heading4">Dr. Jody Loves</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof2} alt="" />
                    <h4 className="heading4">Ram Shankar</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof3} alt="" />
                    <h4 className="heading4">Trip Roki</h4>
                    <span>VP & Circulam Design</span>
                </div>
                <div className="profile">
                    <img src={prof4} alt="" />
                    <h4 className="heading4">Roberta GSPI</h4>
                    <span>VP & Circulam Design</span>
                </div>
            </div>
        </div>
    )
}

export default Meettheeducators