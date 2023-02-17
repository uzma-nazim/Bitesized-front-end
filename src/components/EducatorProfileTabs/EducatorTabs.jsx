import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import EducatorAbout from './EducatorAbout';
import EducatorBitesized from './EducatorBitesized';
import "./Educator.scss";

const EducatorTabs = () => {
  return (
    <div className="container tabscontainer">
    <Tabs
      defaultActiveKey="About Me"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="About Me" title="About Me">
        <EducatorAbout/>
      </Tab>
      <Tab className='' eventKey="My Bitesized Courses" title="My Bitesized Courses">
      <EducatorBitesized/>
        
      </Tab>
      <Tab eventKey="Ratings and Reviews" title="Draft" >
      <EducatorBitesized finishdraftsbtn/>
        
        
      </Tab>
    </Tabs>
    </div>
  )
}

export default EducatorTabs;