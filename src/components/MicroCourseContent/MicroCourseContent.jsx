import React from "react";
import "./MicroCourseContent.scss";
import uploadthumbnail from "../../assets/upload.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { addCourse, baseUrl } from "../../urls";
import { useRef } from 'react';
import { toast } from "react-toastify";

const MicroCourseContent = () => {
  const navigate = useNavigate();
  const pRef = useRef(null);
  const [course, setCourse] = useState({
    micro_course: "", 
    theme:"my theme",
  });
 
  const [age_group, setAge_group] = useState('');

  const handleSelect = (value) => {
    setAge_group(value);
  };
    const [supply_list,setSupply_list]=useState([])
    const hanldeMultInput=(e)=>{
        const data=[...supply_list,[]]
        setSupply_list(data);
    }

    const hanldeOnChangeMultInput=(e,i)=>{
        const data=[...supply_list]
        data[i]=e.target.value;
        setSupply_list(data);        
    }
  const [thumbnail, setThumbnail] = useState(null);
  const [showThumbnail, setShowThumbnail] = useState(null);

  const handleInputChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [name]: value });
  };

  const uploadThumbnail = (e) => {
    const thumbnail = e.target.files[0];
    setThumbnail(thumbnail);
    setShowThumbnail(URL.createObjectURL(thumbnail));
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata=new FormData();
    formdata.append('micro_course',course.micro_course)
    formdata.append('theme',course.theme)
    formdata.append('age_group',age_group)
    formdata.append('supply_list',supply_list)
    formdata.append('thumbnail',thumbnail)
    const config={
        headers:{
            'user_access_token':localStorage.getItem('token')
        }
    }
    const res=await axios.post(`${baseUrl}${addCourse}`,formdata,config);
    if(res.data.success){
      toast.success(res.data.message)
      navigate('/upload-video-course/'+res.data.id)
    }
  }
  return (
    <div className="container">
     <form onSubmit={handleSubmit} >
     <div className="allcontentpadding">
        <div>
          <h1 className="stepbystepprocess">Here's a step by step process.</h1>
          <p className="stepbysteppoints">
            1. Once you submit your micro-course, it will be sent to the
            bitesized team to add some pizzazz and to make edits.
          </p>
          <p className="stepbysteppoints">
            2. Once edits are complete, the bitesized team will submit your
            micro-course to your profile and the trending page. It’s on the
            market!
          </p>
          <p className="stepbysteppoints">
            3. You’ll receive notifications and a payment from bitesized every
            time your course is sold to a customer.
          </p>
        </div>
        <div className="greyline"></div>
        <p className="microheading">Name your micro-course</p>
        <p className="microcourseparas">
          Each micro-course contains 6 micro-lessons that range from 5-15
          minutes long each.
        </p>
        <input
          className="createaddtags"
          value={course.micro_course}
          name="micro_course"
          onChange={handleInputChange}
          type="text"
          placeholder='Create and add tags for what describes your course. Ex: "gardening""problem solving""social emotional learning" '
        />

        <p className="microheading">
          Choose the age groups this course is made for
        </p>
        <div className="numsflex">
          <p onClick={()=>handleSelect(6)} className={age_group ==6 ? "hover_active" :'' }>6</p>
          <p onClick={()=>handleSelect(7)} className={age_group ==7 ? "hover_active" :'' }>7</p>
          <p onClick={()=>handleSelect(8)} className={age_group ==8 ? "hover_active" :'' }>8</p>
          <p onClick={()=>handleSelect(9)} className={age_group ==9 ? "hover_active" :'' }>9</p>
          <p onClick={()=>handleSelect(10)} className={age_group ==10 ? "hover_active" :'' }>10</p>
          <p onClick={()=>handleSelect(11)} className={age_group ==11 ? "hover_active" :'' }>11</p>
          <p onClick={()=>handleSelect(12)} className={age_group ==12 ? "hover_active" :'' }>12</p>
          <p onClick={()=>handleSelect(13)} className={age_group ==13? "hover_active" :'' }>13</p>
        </div>
        <p className="microheading">Choose a Theme</p>
        <select className="createaddtags selecttheme">
          <option value="">Select a theme</option>
        </select>
        <p className="microheading">Supply list for this Course</p>
        <p className="microcourseparas">
          Paper, pencil, etc (if any supplies are needed)
        </p>
        <div className="inputbtn">
            {
                supply_list && supply_list.map((val,i)=>{
                    return(
          <div>
                        <input className="pencilinp" onChange={(e)=>hanldeOnChangeMultInput(e,i)} type="text" placeholder="" />
          </div>

                    )  
                })
            }
          <div>
            <button className="plusadd" type="button" onClick={hanldeMultInput}>+ Add More</button>
          </div>
        </div>
        <label htmlFor="uploadvideo">
          <input
            type="file"
            hidden
            id="uploadvideo"
            onChange={uploadThumbnail}
          />
          <div className="uploaddiv">
            {showThumbnail ? (
              <img src={showThumbnail} alt="" />
            ) : (
              <img src={uploadthumbnail} alt="" />
            )}
            <p className="uploadheading">Upload Thumbnail</p>
            <p className="fileallowed">JPEG,JPG,PNG file are allowed.</p>
            <p className="fileallowed">H 277px, W 208px Recommended</p>
          </div>
        </label>
        <div className="savebtnflex">
          <button className="saveexit" type="submit">Save and Exit</button>
          <button
          type="submit"
            className="savecontinue"
          >
            Save and Continue
          </button>
        </div>
      </div>
     </form>
    </div>
  );
};

export default MicroCourseContent;
