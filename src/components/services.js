import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Aboutimg from '../assets/about-img.jpg';


function Services() {
  return (
    <Container className="about">
    <Row className="justify-content-md-start align-items-center">
        <Col md="6">			
        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Aboutimg} alt='About Image' className='rounded fluid'/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        </Col>
    </Row>
</Container>
  );
}

export default Services;
