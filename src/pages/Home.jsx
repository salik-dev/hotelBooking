import React from 'react';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import Testimonial from '../components/Testimonial';
import ServicesItem from '../components/ServicesItem';
import BecomeDriver from '../components/BecomeDriver';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Helmet title="Home">

      <section className="become__driver">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" className='mx-auto'>
              <h2 className="section__title become__driver__title text-center">
                Do You Want To Register With Us? So Don't Be Late For Press Below Register Now Button. <br />
                <Button className="btn mt-4 become__driver__btn">
                <Link to="/signup">Register Now</Link>{' '}
              </Button>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesItem />
          </Row>
        </Container>
      </section>

      <section className="become__driver">
        <Container>
          <BecomeDriver />
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h6 className="section__subtitle">Our Clients Says</h6>
              <h2 className="section__title">Testimonial</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      <section>
        
      </section>
    </Helmet>
  );
};

export default Home;
