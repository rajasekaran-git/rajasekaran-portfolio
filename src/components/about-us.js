import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html5img from '../assets/skills/html-5.png';
import css3img from '../assets/skills/css-3.png';
// Progressbar
import ProgressBar from 'react-bootstrap/ProgressBar';
// Page Icons
import { BsPersonGear } from "react-icons/bs";
import { BsCloudDownloadFill } from "react-icons/bs";

function About() {
  return (
    // Section
    <div>
    <section className="about-section">
      {/* Content */}
    <Container className="about">
        <Row className="justify-content-md-start align-items-center">
              <Col md="6" lg="6">
              <Row className="justify-content-md-start align-items-center">
                {/* Column */}
                <Col md="12" lg="6">
                  {/* Counter Main wrap */}
                      <div className="counter-main-wrap">
                          <div className="hsquare-counter_inner position-relative">
                            <div className="content-wrap">
                              <div className="icon-wrap">
                              <BsPersonGear />
                              </div>
                              <div className="hsquare-counter__value-wrap">
                                <div className="hsquare-counter__value-inner">
                                  <div className="hsquare-counter__placeholder-wrap"><span className="hsquare-counter__placeholder">7+</span></div>
                                </div>
                              </div>
                              <h5 className="hsquare-counter_title mb-0 me-5">
                                Years of
                                Experience
                              </h5>
                            </div>
                        </div>
                    </div>
                  {/* Counter Main wrap */}
                  </Col>
                {/* Column End */}
                {/* Column */}
                <Col md="12" lg="6">
                  {/* Counter Main wrap */}
                      <div className="counter-main-wrap">
                          <div className="hsquare-counter_inner position-relative">
                            <div className="content-wrap">
                              <div className="icon-wrap">
                              <BsPersonGear />
                              </div>
                              <div className="hsquare-counter__value-wrap">
                                <div className="hsquare-counter__value-inner">
                                  <div className="hsquare-counter__placeholder-wrap"><span className="hsquare-counter__placeholder">7+</span></div>
                                </div>
                              </div>
                              <h5 className="hsquare-counter_title mb-0 me-5">
                                Completed Projects
                              </h5>
                            </div>
                        </div>
                    </div>
                  {/* Counter Main wrap */}
                  </Col>
                {/* Column End */}
                {/* Column */}
                <Col md="12" lg="6">
                  {/* Counter Main wrap */}
                      <div className="counter-main-wrap">
                          <div className="hsquare-counter_inner position-relative">
                            <div className="content-wrap">
                              <div className="icon-wrap">
                              <BsPersonGear />
                              </div>
                              <div className="hsquare-counter__value-wrap">
                                <div className="hsquare-counter__value-inner">
                                  <div className="hsquare-counter__placeholder-wrap"><span className="hsquare-counter__placeholder">30+</span></div>
                                </div>
                              </div>
                              <h5 className="hsquare-counter_title mb-0 me-5">
                                Happy Customers
                              </h5>
                            </div>
                        </div>
                    </div>
                  {/* Counter Main wrap */}
                  </Col>
                {/* Column End */}
                {/* Column */}
                <Col md="12" lg="6">
                  {/* Counter Main wrap */}
                      <div className="counter-main-wrap">
                          <div className="hsquare-counter_inner position-relative">
                            <div className="content-wrap">
                              <div className="icon-wrap">
                              <BsPersonGear />
                              </div>
                              <div className="hsquare-counter__value-wrap">
                                <div className="hsquare-counter__value-inner">
                                  <div className="hsquare-counter__placeholder-wrap"><span className="hsquare-counter__placeholder">15+</span></div>
                                </div>
                              </div>
                              <h5 className="hsquare-counter_title mb-0 me-5">
                              Company Awards Won
                              </h5>
                            </div>
                        </div>
                    </div>
                  {/* Counter Main wrap */}
                  </Col>
                {/* Column End */}
	            </Row>
            </Col>
              <Col md="12 ps-lg-5" lg="6">
	<Row className="align-items-center">
		<Col md="12"><h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3></Col>
		<Col md="12" className="d-block d-sm-none">
		</Col>
		<Col md="12">
			<ul className="d-flex flex-wrap about-list list-unstyled open-sans-font">
				<li><span className="title">first name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Rajasekaran</span></li>
				<li><span className="title">last name: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">S</span></li>
				<li><span className="title">Age: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">29 Years</span></li>
				<li><span className="title">Nationality: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Indian</span></li>
				<li><span className="title">Freelance: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block theme-color">Available</span></li>
				<li><span className="title">Address: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Coimbatore, Tamilnadu</span></li>
				<li><span className="title">phone: </span><div className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"><a href="tel:+91989-456-0297" className="theme-color">+91-989-456-0297</a></div></li>
				<li><span className="title">Email: </span><div className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"><a href="mailto:sekar711srs@gmail.com" className="theme-color">sekar711srs@gmail.com</a></div></li>
				<li><span className="title">Skype: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"> smrajasekaran</span></li>
				<li><span className="title">languages: </span><span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Tamil, English</span></li>
			</ul>
		</Col>
		<Col md="12" className="mt-1">
			<a className="button bt-default" href="/assets/img/sample.pdf" download="" style={{cursor: 'pointer'}}><span className="button-text">Download CV</span><span className="button-icon ms-2"><BsCloudDownloadFill /></span></a>
		</Col>
	</Row>

            </Col>
        </Row>
  </Container>
  </section>
  <section className="my-skills secondary-bg">
  {/* Content */}
<Container className="skills">
    <Row className="justify-content-md-start align-items-center">
        <Col md="12">
          <div class="section-title text-center"><h2 class="mb-0 ft-wt-600 pb-3">My Skills</h2></div>
        </Col>
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={html5img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">88%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={88} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={css3img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">84%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={84} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={html5img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">80%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={80} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={css3img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">85%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={85} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={html5img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">90%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={90} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={css3img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">77%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={77} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={html5img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">65%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={65} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
            {/* Column */}
            <Col md="6" lg="3">
              {/* Progressbar Main wrap */}
                  <div className="progressbar-main-wrap">
                      <div className="hsquare-progressbar_inner position-relative">
                        <div className="content-wrap">
                          <div className="img-wrap">
                          <img src={css3img} alt='HTML5' className='fluid' />
                          </div>
                          <div className="hsquare-progressbar__value-wrap">
                            <div className="hsquare-progressbar__value-inner">
                              <div className="hsquare-progressbar__placeholder-wrap"><span className="hsquare-progressbar__placeholder">75%</span></div>
                            </div>
                          </div>
                          <div className="mb-2">
                          <ProgressBar variant="success" now={75} />
                          </div>
                          <h5 className="hsquare-progressbar_title mb-0">
                            HTML5
                          </h5>
                        </div>
                    </div>
                </div>
              {/* Progressbar Main wrap */}
              </Col>
            {/* Column End */}
    </Row>
</Container>
</section>
</div>
  );
}

export default About;
