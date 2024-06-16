import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js' 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsArrowUpRight } from "react-icons/bs";
import mainlogo from '../assets/rs-logo-light.png';


function Header() {
  return (
        <Navbar expand="lg" className="secondary-bg header-main">
          <Container fluid>
            <Navbar.Brand href="/" className="theme-color">
                          <img src={mainlogo} alt='rs-logo' className='fluid' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
                <div className="header-btn">
                  
			<a className="button bt-default" href="/contact"><span className="button-text">Let's Talk!</span><span className="button-icon ms-2"><BsArrowUpRight /></span></a>
                </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;
