import React from 'react'
import Courses from '../../components/Courses/Courses'
import Header from '../../components/Header/Header'
import MybiteSizedCourse from '../../components/MybiteSizedCourse/MybiteSizedCourse'

const UserCourses = () => {
  return (
    <>
    
    <Header  userLogin/>
    

    <MybiteSizedCourse/>
    <div className='container recentContainer'>
        <h1 className='heading1'>Recent Bought Course</h1>
        <div className='bottomLine'></div>
    </div>
    <Courses/>
    <div style={{marginTop:"40px"}}>
    <Courses hideLine/>

    </div>
    </>
  )
}

export default UserCourses