import React from 'react'
import "./MicroCourseContent.scss";
import uploadthumbnail from "../../assets/upload.svg";

const MicroCourseContent = () => {
  return (
    <div className="container">
        <div className='allcontentpadding'>
            <div>
            <h1 className='stepbystepprocess'>Here's a step by step process.</h1>
                <p className='stepbysteppoints'>1. Once you submit your micro-course, it will be sent to the bitesized team to add some pizzazz and to make edits.</p>
                <p className='stepbysteppoints'>2. Once edits are complete, the bitesized team will submit your micro-course to your profile and the trending page. It’s on the market!</p>
                <p className='stepbysteppoints'>3. You’ll receive notifications and a payment from bitesized every time your course is sold to a customer. </p>
            </div>
            <div className='greyline'></div>
            <p className='microheading'>Name your micro-course</p>
            <p className="microcourseparas">Each micro-course contains 6 micro-lessons that range from 5-15 minutes long each.</p>
            <input className='createaddtags' type="text" placeholder='Create and add tags for what describes your course. Ex: "gardening""problem solving""social emotional learning" ' />

            <p className='microheading'>Choose the age groups this course is made for</p>
            <div className='numsflex'>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
            </div>
            <p className='microheading'>Choose a Theme</p>
            <select className='createaddtags selecttheme'>
                <option value="">Select a theme</option>
            </select>
            <p className='microheading'>Supply list for this Course</p>
            <p className="microcourseparas">Paper, pencil, etc (if any supplies are needed)</p>
            <div className='inputbtn'>
                <div>
                <input className="pencilinp" type="text" placeholder='Pencil' />
                </div>
                <div>
                <button className='plusadd'>+ Add More</button>
                </div>
            </div>
            <label htmlFor="uploadvideo">
                <input type="file" hidden id="uploadvideo" />
            <div className='uploaddiv'>
                <img src={uploadthumbnail} alt="" />
                <p className='uploadheading'>Upload Thumbnail</p>
                <p className='fileallowed'>JPEG,JPG,PNG file are allowed.</p>
                <p className='fileallowed'>H 277px, W 208px Recommended</p>
            </div>
            </label>
            <div className='savebtnflex'>
                <button className="saveexit">Save and Exit</button>
                <button className="savecontinue">Save and Continue</button>
            </div>
        </div>
    </div>
  )
}

export default MicroCourseContent