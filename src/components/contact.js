import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    // Page Header
    <section className="contact-section">
      {/* Content */}
    <Container className="contact">
        <Row className="justify-content-md-start align-items-center">
          {/* Column */}
            <Col md="6">			
                <div className='section-title me-5'>
                  <h2 className="mb-0 ft-wt-600 pb-3">Contact Info</h2>
                  <div className="mb-0 ft-wt-600"><p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p></div>
                </div>
                {/* Feature List */}
            <div className="feature-box-list">
              <div className="media mb-4 d-flex align-items-center">
                <div className='media-left'>
                <div className="media-left-icon me-4"><BsFillGeoAltFill /></div>
                </div>
                <div className="media-body">
                  <h4 className="mt-0 mb-2">Location</h4>
                  123 Stree New York City , USA 750065.
                </div>
              </div>
            </div>
            {/* Feature List */}
            <div className="feature-box-list">
            <div className="media mb-4 d-flex align-items-center">
              <div className='media-left'>
              <div className="media-left-icon me-4"><BsHeadset /></div>
              </div>
              <div className="media-body">
                <h4 className="mt-0 mb-2">Email Us</h4>
                <div class="d-block"><a href="mailto:info@rajasekarans.com" class="theme-color">info@rajasekarans.com</a></div>
                </div>
              </div>
            </div>
            {/* Feature List */}
            <div className="feature-box-list">
            <div className="media mb-4 d-flex align-items-center">
              <div className='media-left'>
              <div className="media-left-icon me-4"><BsEnvelope /></div>
              </div>
              <div className="media-body">
                <h4 className="mt-0 mb-2">Phone Number</h4><div class="d-block"><a href="tel:+91-989-456-0297" class="theme-color">+91-989-456-0297</a></div>
              </div>
            </div> </div>
            {/* Feature List */}
            <div className="feature-box-list">
            <div className="feature mb-4 d-flex align-items-center">
              <div className="media-body">
                <h6 className="mt-0 mb-3">Follow Here:</h6>
                <div class="social-list">
                <ul class="nav social-icons">
                      <li>
                        <a href="#" target="_blank" class="social-facebook"><BsFacebook /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-instagram"><BsInstagram /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-linkedin"><BsLinkedin /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-twitter"><BsTwitterX /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-whatsapp"><BsWhatsapp /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-behance"><BsBehance /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-dribbble"><BsDribbble /></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" class="social-youtube"><BsYoutube /></a>
                      </li>
                    </ul>

                </div>
              </div>
            </div></div>

            

            </Col>
          {/* Column end */}
          
          {/* Column */}
            <Col md="6">
    <div className="contact-form-main-wrap">
    <div className="contact-form-inner">
    <div className='section-title me-5'>
        <h3 className="mb-0 ft-wt-600 pb-3">Get In Touch</h3>
        <div className="mb-0 ft-wt-600"><p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas.</p></div>
      </div>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlName">
        <Form.Control type="name" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Message" rows={3} />
      </Form.Group>
      <Form.Group className="mb-0" controlId="exampleForm.ControlSubmit">
        <button className="submit btn btn-primary" type="Submit">Submit</button>
      </Form.Group>
    </Form>
    </div>
    </div>
              </Col>
              
          {/* Column End */}
            <Col md="12">

            </Col>
        </Row>
  </Container>
  </section>
  );
}

export default Contact;
