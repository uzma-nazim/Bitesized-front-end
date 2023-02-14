import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./RateCourses.scss";
import whiteratestar from "../../assets/whiteratestar.svg";
import { NavLink } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='mainrateuser'>
            <div className='mainrateusercenter'>
        <h1 className='tellushow'>Tell us how this lesson was?</h1>
        <div className="whitestargap">
        <img src={whiteratestar} alt="" />
        <img src={whiteratestar} alt="" />
        <img src={whiteratestar} alt="" />
        <img src={whiteratestar} alt="" />
        <img src={whiteratestar} alt="" />
             </div>
                <div className='textareaforwritecomment'><textarea className='textareaforratecourse' name="" id="" placeholder='Write your comment' ></textarea> </div>
                <div><button className='submitreview'>Submit Review</button></div>
                <div><button className='watchnext'>Watch Next</button></div>
                <div className='navlinkpadding'> <NavLink className="takemeback">Take me back to my <span className="spancourse">Course.</span> </NavLink> </div>
                </div>
                </div>
      </Modal.Body>
    </Modal>
  );
}

function RateCourses() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default RateCourses;