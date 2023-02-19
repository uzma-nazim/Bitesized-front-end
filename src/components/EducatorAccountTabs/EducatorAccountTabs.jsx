import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Educatoraccounttab1 from '../Educatoraccount/Educatoraccounttab1';
import Educatoraccounttab2 from '../Educatoraccount/Educatoraccounttab2';
import './EducatorAccountTabs.scss'


function EducatorAccountTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <h1 className="fontbold setting">Settings</h1>
        <Col sm={3}>
          <Nav  variant="pills" className="flex-column tab-items-sec">
            <Nav.Item className='tab-item-one'>
              <Nav.Link eventKey="first">Account</Nav.Link>
            </Nav.Item>
            <Nav.Item className='tab-item-one'>
              <Nav.Link eventKey="second">Payment Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Educatoraccounttab2/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Educatoraccounttab1/>
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default EducatorAccountTabs;