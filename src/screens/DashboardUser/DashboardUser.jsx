import React from 'react'
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import "./DashboardUser.scss";

const DashboardUser = () => {
  return (
    <div>
    <div className='dashboardbackground'>
    <div className='dashboardhead'>
    <DashboardSideBar/>  
    </div>
    </div>
  </div>
  )
}

export default DashboardUser;