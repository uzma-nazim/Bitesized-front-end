import React, { useState } from 'react'
import "./MicroCourseContentSecond.scss";
import uploadthumbnail from "../../assets/upload.svg";
import { useNavigate, useParams } from 'react-router-dom';
import { addCourse2, baseUrl } from '../../urls';
import axios from 'axios';

const MicroCourseContentSecond = () => {
  const navigate = useNavigate()
  const {id}=useParams();
  const [course, setCourse] = useState({
    micro_course1: "",
  });
 
    const [supply_list1,setSupply_list1]=useState([])
    const hanldeMultInput=(e)=>{
        const data=[...supply_list1,[]]
        setSupply_list1(data);
    }

    const hanldeOnChangeMultInput=(e,i)=>{
        const data=[...supply_list1]
        data[i]=e.target.value;
        setSupply_list1(data);        
    }
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleInputChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCourse({ ...course, [name]: value });
  };

  const uploadThumbnail = (e) => {
    const thumbnail = e.target.files[0];
    setThumbnail(thumbnail); 
  };

  const uploadVideo = (e) => {
    const video = e.target.files[0];
    setVideo(video); 
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata=new FormData();
    formdata.append('micro_course1',course.micro_course1)
    formdata.append('supply_list1',supply_list1)
    formdata.append('micro_thumbnail',thumbnail)
    formdata.append('micro_video',video && "null")
    const config={
        headers:{
            'user_access_token':localStorage.getItem('token')
        }
    }
    const res=await axios.post(`${baseUrl}${addCourse2}/${id}`,formdata,config);
    console.log(res);
    // navigate('/educator-profile')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} action="">
      <div className='allcontentpadding'>
         <div>
            <h1 className='stepbystepprocess thinkpad'>Thinks to know</h1>
            <ol className='stepforlowpad'>
                <li className='stepbysteppoints steptwo'>You will upload 6 micro-lessons for your course.</li>
                <li className='stepbysteppoints steptwo'>Each micro-lesson can be anywhere from 5-15 minutes long</li>
                <li className='stepbysteppoints steptwo'>Each micro-lesson needs some type of project based activity to be approved (a do it with me type format). This is where you do a project and kids can do it along when they watch your video.</li>
                <li className='stepbysteppoints steptwo'>Explain the learning at the end of the video and what to expect in the next lesson. </li>
                <li className='stepbysteppoints steptwo'>Once all lessons (the whole micro-course) is submitted. the bitesized team will review, edit, and price it. Then we’ll reupload it to your educator profile and trending page for users (kids, parents, homeschoolers,etc.) to purchase. You’ll receive a payment and notification for each purchase.</li>
            </ol>
                
          </div> 
            <div className='greyline greyforpadding'></div>
            <div className='instructionvideo'>
                <h1>Instructions for Video</h1>
                <ol>
                  <li>Record your video vertically. All videos must be recorded vertically. You can record it on an ipad, your iphone, or your laptop.</li>
                  <li>Make sure you clean your camera before you record.</li>
                </ol>
            </div>


              <h1 className='microlesson'>Micro Lesson 1</h1>
            <div className='flexforvideomicrocourse'>
              <label htmlFor="uploadvideos">
                <input type="file" hidden onChange={uploadThumbnail} id='uploadvideos' />
              <div className='uploadvideosecond'>
                <img src={uploadthumbnail}  alt="" />
                <p>Upload Video</p>
              </div>
              </label>
              
              <div className='microsupply'>
              <p className='microheading microheadingpad'>Name of your micro-course</p>
              <p className="microcourseparas">Each micro-course 1 project</p>
              <input className='createaddtags placeholderformicro' name='micro_course1' value={course.micro_course1} onChange={handleInputChange} type="text" placeholder='You can name this lesson that is descriptive of the project you’ll be teaching.' />

              <p className='microheading addsupply'>Add Supply list for this lesson</p>
              <p className="microcourseparas">Paper, pencil, etc (if any supplies are needed)</p>
              <div className='inputbtn'>
              {
                supply_list1 && supply_list1.map((val,i)=>{
                    return(
          <div>
                        <input className="pencilinp" onChange={(e)=>hanldeOnChangeMultInput(e,i)} type="text" placeholder="" />
          </div>

                    )  
                })
            }
                <div>
                <button type='button' onClick={hanldeMultInput} className='plusadd plusaddmore'>+ Add More</button>
                </div>
            </div>
              </div>
            </div>

            <div className='flexforuploadsave'>
              <div>
            <label htmlFor="uploadvideo">
                <input type="file" hidden onChange={uploadVideo} id="uploadvideo" />
            <div className='uploaddiv uploaddivcolor'>
                <img src={uploadthumbnail} alt="" />
                <p className='uploadheading'>Upload Thumbnail</p>
                <p className='fileallowed'>JPEG,JPG,PNG file are allowed.</p>
                <p className='fileallowed'>H 277px, W 208px Recommended</p>
            </div>
            </label>

            <div className='lessonformatmain'>
              <h1>Lesson Format</h1>
              <ol>
                <li>Start by saying introducing yourself and what the kids will be doing in the lesson.</li>
                <li>List the supplied needed for this lesson. “For this lesson, you’ll need xyz.” If there is no supply list, let kids know: “For this lesson you won’t need any supplies. </li>
                <li>Get started by showing step by step how to do the project.</li>
                <li>End by letting the kids know what they’ll be learning and doing in the next lesson.</li>
              </ol> 
            </div>

            </div>
            <div className='savebtnflex fortopmarginsave'>
                <button className="saveexit" type='submit'>Save and Exit</button>
                <button className="savecontinue" type='submit'>Save and Continue</button>
            </div>
            </div>

            
        </div>
      </form>
       
    </div>
  )
}

export default MicroCourseContentSecond;