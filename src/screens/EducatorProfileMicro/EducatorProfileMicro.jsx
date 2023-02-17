import React from 'react'
import CourseUserProfile from '../../components/CourseUserProfile/CourseUserProfile';
import EducatorTabs from '../../components/EducatorProfileTabs/EducatorTabs';
import Header from '../../components/Header/Header';

const EducatorProfileMicro = () => {
  return (
    <div>
        <Header userLogin/>
        <CourseUserProfile linkbtn />
        <EducatorTabs />
    </div>
  )
}

export default EducatorProfileMicro;