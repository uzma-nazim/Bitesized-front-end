import React from 'react'
import DashboardStatus from './DashboardStatus'
import MicroApprovalContentComponent from './MicroApprovalContentComponent'

const MicroApprovalContent = () => {
  return (
    <div className='mainusercontent'>
     <div className='maindashboardcontentcomponent'>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     <MicroApprovalContentComponent/>
     </div>
       <div className='dashboardstatusdiv'>
        <DashboardStatus/>
       </div>
    </div>
  )
}

export default MicroApprovalContent