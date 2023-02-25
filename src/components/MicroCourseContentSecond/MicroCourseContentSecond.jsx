import React from 'react'
import "./MicroCourseContentSecond.scss";
import uploadthumbnail from "../../assets/upload.svg";
import { useNavigate } from 'react-router-dom';

const MicroCourseContentSecond = () => {
  const navigate = useNavigate(   )

  return (
    <div className='container'>
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
                <input type="file" hidden id='uploadvideos' />
              <div className='uploadvideosecond'>
                <img src={uploadthumbnail} alt="" />
                <p>Upload Video</p>
              </div>
              </label>
              
              <div className='microsupply'>
              <p className='microheading microheadingpad'>Name of your micro-course</p>
              <p className="microcourseparas">Each micro-course 1 project</p>
              <input className='createaddtags placeholderformicro' type="text" placeholder='You can name this lesson that is descriptive of the project you’ll be teaching.' />

              <p className='microheading addsupply'>Add Supply list for this lesson</p>
              <p className="microcourseparas">Paper, pencil, etc (if any supplies are needed)</p>
              <div className='inputbtn'>
                <div>
                <input className="pencilinp" type="text" placeholder='Pencil' />
                </div>
                <div>
                <button className='plusadd plusaddmore'>+ Add More</button>
                </div>
            </div>
              </div>
            </div>

            <div className='flexforuploadsave'>
              <div>
            <label htmlFor="uploadvideo">
                <input type="file" hidden id="uploadvideo" />
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
                <button className="saveexit">Save and Exit</button>
                <button className="savecontinue"  onClick={()=>navigate("/educator-profile")}>Save and Continue</button>
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default MicroCourseContentSecond;