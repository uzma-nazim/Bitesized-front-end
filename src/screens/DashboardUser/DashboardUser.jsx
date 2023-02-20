import React from 'react'
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import DashboardUserContent from '../../components/DashboardUserContent/DashboardUserContent';
import "./DashboardUser.scss";

const DashboardUser = () => {
  return (
    <div>
      <div className='dashboardbackground'>
      <div className='dashboardhead'>
      <DashboardHeader/>
      <DashboardUserContent/>
      </div>
      </div>
      <DashboardSideBar/>  
    </div>
  )
}

export default DashboardUser;