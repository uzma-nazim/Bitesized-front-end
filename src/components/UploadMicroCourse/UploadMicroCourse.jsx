import React from 'react';
import Header from '../Header/Header';
import './UploadMicroCourse.scss';
import manprofile from '../../assets/manprofile.svg'
import MicroCardSlider from '../MicroCourseSlider/MicroCourseSlider';




export default function UploadMicroCourse() {
    return (
        <div>
            <Header educatorLogin />

            <div className="container">
                <div className="uploadmicrocourse-container">
                    <div className="microcourse-profile">
                        <img src={manprofile} alt="" />
                        <h1 className='fontbold microprofile-heading'>Benjamin Mai</h1>
                    </div>
                    <div className="microcourse-name">
                        <p className='course-name fontmed'>Course Name:</p>
                        <h1 className='fontbold microcourse-heading'>UI Design Bootcamp. Master Typography, Colour & Grids</h1>
                    </div>
                    <div className="microcourse-name">
                        <p className='course-name fontmed'>Course Tags:</p>
                        <p className='course-tags'>
                            <button className='tag-button fontmed'>#tag1</button>
                            <button className='tag-button fontmed'>#tagline 2</button>
                            <button className='tag-button fontmed'>#tag3</button>
                            <button className='tag-button fontmed'>#tag4</button>
                            <button className='tag-button fontmed'>#tagline 5</button>
                        </p>
                    </div>
                    <div className="microcourse-name">
                        <p className='course-name fontmed'>Course Tags:</p>
                        <h2 className='design-heading fontbold'>UIUX Design</h2>
                        <p className='course-name fontmed'>Microcourse Supply List</p>
                    </div>
                    <div className="micro-course-cards">
                        <MicroCardSlider/>
                    </div>

                    <div className="upload-ui-heading fontbold">
                        <h1>Upload UI Design Course edits and approve</h1>
                    </div>

                    <div className="micro-course-cards">
                        <MicroCardSlider uploadvideo/>
                    </div>
                    <div className="micro-buttons">
                        <button className='exit-button fontbold'>Save and Exit</button>
                        <button className='continue-button fontbold'>Save and Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
