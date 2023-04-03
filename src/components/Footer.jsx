import React from 'react';

import '../styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const QUICK__LINKS = [
  {
    display: 'About Us',
    path: '/about',
  },

  {
    display: 'Our Services',
    path: '/services',
  },

];

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__top pb-5">
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer__logo__container mb-4">
                <h1>
                  <Link to="/home" className="footer__logo">
                    <i class="ri-home-4-line"></i>
                    <span className="text-light ">
                      Hotel Booking <br /> Service
                    </span>
                  </Link>
                </h1>
                <p className="footer__logo-content">
                We offer a wide range of hotel booking services, including easy online booking, competitive pricing, and excellent customer support.
                </p>
              </div>
            </Col>
            <Col lg="2" md="4" sm="6">
              <div className="mb-4 ">
                <h5 className="text-light footer__quick__links">Quick Links</h5>
                <ListGroup>
                  {QUICK__LINKS.map((item, index) => (
                    <ListGroupItem
                      className="p-0 mt-3 quick__links"
                      key={index}
                    >
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <div className="mb-4">
                {' '}
                <h5 className="text-light mb-4 footer__quick__links">
                  Head Office
                </h5>
                <p className="head__office">
                  Software Technology Park, Skardu, Pakistan
                </p>
                <p className="head__office">Office Time: 9am - 6pm</p>
              </div>
            </Col>

            <Col lg="3" md="4">
              <div
                className="mb-4
              "
              >
                <h5 className="text-light mb-4 footer__quick__links">
                  Contact Us
                </h5>
                <p className="head__office">Phone: +xyz xyz xyz xyz </p>
                <p className="head__office">Email: anchan@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <Row>
            <Col>
              <div className="footer__bottom">
                <p className="section__description pt-4 fw-bold text-center d-flex align-items-center justify-content-center gap-1">
                  <i class="ri-copyright-line"></i> Copyright 2022, developed by
                  <span>team Anchan Technologies</span>. All Rights Reserved
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
