import React from 'react'
import DashboardContent from '../../components/DashboardContent/DashboardContent';
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import "./DashboardUser.scss";

const DashboardUser = () => {
  return (
    <div>
    <div className='dashboardbackground'>
    <div className='dashboardhead'>
    <DashboardSideBar/>
     <DashboardContent/>
    </div>
    </div>
  </div>
  )
}

export default DashboardUser;