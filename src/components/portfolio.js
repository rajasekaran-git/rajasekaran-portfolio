import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsSearch } from "react-icons/bs";
import Portfolioimg from '../assets/service/1.jpg';
import Portfolioimg2 from '../assets/service/2.jpg';
import Portfolioimg3 from '../assets/service/3.jpg';
import Portfolioimg4 from '../assets/service/4.jpg';
import Portfolioimg5 from '../assets/service/5.jpg';
import Portfolioimg6 from '../assets/service/6.jpg';


function Portfolio() {
  return (
    // Sections
    <section className="portfolio-section">
      {/* Content */}
    <Container className="portfolio-inner">
    <Row className="justify-content-md-start align-items-center">
        
      <Col md="12">
          <div class="section-title text-center"><h2 class="mb-0 ft-wt-600 pb-3">Our Portfolio</h2></div>
        </Col>
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg2} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg3} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg4} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg5} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        {/* Columns End */}
        <Col md="4">			
          <Card className='portfolio-grid-wrap'>
            <div className="portfolio-thumb position-relative">
            <Card.Img variant="top" src={Portfolioimg6} alt='Portfolio Image' className='fluid'/>
            <div className="card-btn">
                <Button variant="primary" href="#"><BsSearch /></Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className='mb-0'><a href='#'>Mockup project</a></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* Columns End */}
        
    </Row>
</Container>
</section>
  );
}

export default Portfolio;
