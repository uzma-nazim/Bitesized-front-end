import React from 'react'
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import EducatorsCotent from '../../components/EducatorsCotent/EducatorsCotent';
import "./Educators.scss";

const Educators = () => {
  return (
    <div>
      <div className='dashboardbackground educatorbackground'>
      <div className='dashboardhead'>
      <DashboardSideBar csvbtn />
      <EducatorsCotent/>
      </div>
      </div>
    </div>
  )
}

export default Educators;