import React from 'react'
import "./DashboardContent.scss";
import ArrowDashboard from "../../assets/ArrowDashboard.svg";
import SmallArrow from "../../assets/SmallArrow.svg";
import SmallRedArrow from "../../assets/SmallRedArrow.svg";
import RedArrow from "../../assets/RedArrow.svg";
import DashboardChart from '../DashboardChart/DashboardChart';
import RadialApexChart from '../CircleChart/CircleChart';

const DashboardContent = () => {
  return (
    <>
    {/* <div className='doubledashboardcontentmain'>
    <div className='dashboardcontentmain borderdashboardcontentmain'>
      <div className='dashboardparentdiv dashboardparentdivone'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Educators</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />4.85%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv dashboardparentdivtwo'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Customers</p>
          <p className='totaleducatornum'>1.5k <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />5.25%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv dashboardparentdivthree'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Gross Revenue</p>
          <p className='totaleducatornum'>$30.400 <span className='smallarrowspan'><img src={SmallArrow} alt="" />3.55%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv dashboardparentdivfour'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Fee Revenue</p>
          <p className='totaleducatornum'>$14.800 <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />10.30%</span> </p>
        </div>
      </div>

    </div>






    <div className='dashboardcontentmain dashboardcontentmainpadding'>
      <div className='dashboardparentdiv dashboardparentdivfive'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Microcourse</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />4.85%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv dashboardparentdivsix'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Bought Microcourse</p>
          <p className='totaleducatornum'>1.5k <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />5.25%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv dashboardparentdivseven'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Bought Customer</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />3.55%</span> </p>
        </div>
      </div>

    </div>
    </div> */}
    {/* ======================= */}
{/* ======================= */}


    <div className="dashboardforflex">

      <div className='dashboardgreyline'></div>
    <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Educators</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />4.85%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Customers</p>
          <p className='totaleducatornum'>1.5k <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />5.25%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Gross Revenue</p>
          <p className='totaleducatornum'>$30.400 <span className='smallarrowspan'><img src={SmallArrow} alt="" />3.55%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Fee Revenue</p>
          <p className='totaleducatornum'>$14.800 <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />10.30%</span> </p>
        </div>
      </div>



      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Microcourse</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />4.85%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={RedArrow} alt="" />
        <div>
        <p className='totaleducators'>Total Bought Microcourse</p>
          <p className='totaleducatornum'>1.5k <span className='smallredarrowspan'><img src={SmallRedArrow} alt="" />5.25%</span> </p>
        </div>
      </div>

      <div className='dashboardparentdiv'>
        <img className='arrowdashboard' src={ArrowDashboard} alt="" />
        <div>
        <p className='totaleducators'>Total Bought Customer</p>
          <p className='totaleducatornum'>120 <span className='smallarrowspan'><img src={SmallArrow} alt="" />3.55%</span> </p>
        </div>
      </div>

    </div>


      <div>
        
        <DashboardChart/>

      </div>
    </>
  )
}

export default DashboardContent