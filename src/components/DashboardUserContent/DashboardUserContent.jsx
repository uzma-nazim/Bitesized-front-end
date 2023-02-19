import React from 'react'
import DashboardContentComponent from './DashboardContentComponent'
import DashboardStatus from './DashboardStatus'

const DashboardUserContent = () => {
  return (
    <div className='container mainusercontent'>
     <div className='maindashboardcontentcomponent'>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
        <DashboardContentComponent/>
     </div>
       <div className='dashboardstatusdiv'>
        <DashboardStatus/>
       </div>
    </div>
  )
}

export default DashboardUserContent