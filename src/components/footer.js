import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js' 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <section className="footer-main">
          <Container fluid>
                <Row>
                  <Col md="12">
                        <div className="footer-bottom-wrap">
                        <p className="footer-copyright">© Copyright 2024. All rights reserved, Designed by 
 <a href="#" target="_blank" className="theme-color"> Rajasekaran</a></p>
                        </div>
                  </Col>
                </Row>
          </Container>
          </section>
      );
    }

export default Footer;
