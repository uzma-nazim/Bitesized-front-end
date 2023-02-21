import React from "react";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import PaymentsContent from "../../components/PaymentsContent/PaymentsContent";
import "./Payments.scss";

const Payments = () => {
  return (
    <div>
    <div className='dashboardbackground educatorbackground'>
    <div className='dashboardhead'>
    <DashboardSideBar/>
    <PaymentsContent/>
    </div>
    </div>
  </div>
  );
};

export default Payments;
