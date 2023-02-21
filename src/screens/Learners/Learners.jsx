import React from 'react'
import DashboardSideBar from '../../components/DashboardSideBar/DashboardSideBar';
import LearnersContent from '../../components/LearnersContent/LearnersContent';
import "./Learners.scss";

const Learners = () => {
  return (
    <div> 
      <div className='dashboardbackground educatorbackground'>
      <div className='dashboardhead'>
      <DashboardSideBar csvbtn/>  
      <LearnersContent/>
      </div>
      </div>
    </div>
  )
}

export default Learners