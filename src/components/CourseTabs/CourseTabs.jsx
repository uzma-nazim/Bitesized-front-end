import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutMe from './AboutMe';
import "./CourseTabs.scss"

function CourseTabs() {
  return (

    <div className="container tabscontainer">
    <Tabs
      defaultActiveKey="About Me"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="About Me" title="About Me">
        <AboutMe/>
      </Tab>
      <Tab eventKey="My Bitesized Courses" title="My Bitesized Courses">
      <AboutMe/>
        
      </Tab>
      <Tab eventKey="Ratings and Reviews" title="Ratings and Reviews" >

        
      <AboutMe/>
        
      </Tab>
    </Tabs>
    </div>
  );
}

export default CourseTabs;