import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Educatoraccounttab1 from '../Educatoraccount/Educatoraccounttab1';
import Educatoraccounttab2 from '../Educatoraccount/Educatoraccounttab2';
import './EducatorAccountTabs2.scss'

function EducatorAccountTabs2(props) {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 top-nav tabscontainer"
        >
            <Tab className='tab-component' eventKey="home" title="Account">
            <Educatoraccounttab1/>
            </Tab>
            <Tab className='tab-component' eventKey="profile" title="Payment Settings">
                
            <Educatoraccounttab2/>
            </Tab>
        </Tabs>
    );
}

export default EducatorAccountTabs2;