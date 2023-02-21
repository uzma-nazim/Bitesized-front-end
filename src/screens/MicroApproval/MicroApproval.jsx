import React from 'react'
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import MicroApprovalContent from '../../components/DashboardUserContent/MicroApprovalContent';
import "./MicroApproval.scss";

const MicroCourseApproval = () => {
  return (
    <div>
      <div className='dashboardbackground'>
      <div className='dashboardhead'>
      <DashboardSideBar/>  
      <MicroApprovalContent/>
      </div>
      </div>
    </div>
  )
}

export default MicroCourseApproval;