import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';
import '../main.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Introbanner from '../assets/intro-banner.png';
import { BsArrowUpRight  } from "react-icons/bs";


function Home() {
  return (
        // Page Header
        <section className="home-section pb-0 pt-5">
        {/* Content */}
      <Container className="home-wrap">
          <Row className="justify-content-md-start align-items-center">
            {/* Column */}
              <Col md="6">			
                  <div className='intro-title me-5'>
                    <h2 className="mb-0 ft-wt-600 pb-3 ">I’m
                    <div class="title-inner d-flex" style={{width: '374.275px'}}>
                        <div class="title">
                          <div class="cd-headline slide">
                            <div class="cd-words-wrapper">
                              <p class="is-visible theme-color">Rajasekaran</p>
                            </div>
                          </div>
                        </div>
                      </div>
 
welcome to my portfolio</h2>
                    <div className="mb-4 ft-wt-600"><p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p></div>
                  </div>
                  
		<Col md="12" className="mt-4">
			<a className="button bt-default" href="/assets/img/sample.pdf" download="" style={{cursor: 'pointer'}}><span className="button-text">Download CV</span><span className="button-icon ms-2"><BsArrowUpRight /></span></a>
		</Col>
              </Col>
            {/* Column end */}
            
            {/* Column */}
              <Col md="6">
                  <div className="intro-main-wrap">
                  <div className="intro-inner">
                    <div className="intro-image">
                      <img src={Introbanner} alt='about-me' className='fluid' />
                    </div>
                  </div>
                  </div>
                </Col>
          </Row>
    </Container>
    </section>
  );
}

export default Home;
