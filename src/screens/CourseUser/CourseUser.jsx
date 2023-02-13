import React from 'react'
import CourseTabs from '../../components/CourseTabs/CourseTabs'
import CourseUserProfile from '../../components/CourseUserProfile/CourseUserProfile'
import Header from '../../components/Header/Header'

const CourseUser = () => {
  return (
    <>
    <Header/>
    <CourseUserProfile/>
    <CourseTabs/>
    </>
  )
}

export default CourseUser