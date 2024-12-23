import React from 'react';
import './banner.css';
import Particle from '../../../components/Particle';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import hello from '../../../assets/svg/Hello.gif';
import { useSize } from '../../../hooks/useSize';
import { Link } from 'react-router-dom';
import { PC } from './PC';

function Banner() {
  const { windowSize } = useSize();

  const isMobile = windowSize.width < 768;

  return (
    <section className="position-relative">
      <div className="banner w-100 m-0 p-0 overflow-hidden">
        <Particle id={'tsparticles'} isMobile={isMobile} />
        <Container
          fluid
          className="position-absolute top-50 start-50 translate-center w-100">
          <Row className="no-select align-items-center">
            <Col md={12} lg={6} className="text-center text-lg-end ">
              <div className="type-writer fw-bold primary-text-color d-flex justify-content-center justify-content-lg-end">
                <Typewriter
                  options={{
                    strings: [
                      'Namaste',
                      'Hello',
                      'Bonjour',
                      'Sat Sri Akal',
                      'Nomoshkar',
                      'Aadab',
                      'Vanakkam',
                      'Khamma Gani',
                      'Radhe Radhe',
                      'Hola',
                      'Shalom',
                    ],
                    autoStart: true,
                    loop: true,
                    // skipAddStyles: true,
                    // wrapperClassName: "fs-1 fw-bold",
                    // cursorClassName: "Typewriter__cursor fs-1 fw-bold",
                  }}
                />
                <span className="dev-string">Dev!</span>
              </div>
              <p className="fs-5">Want to be a Frontend Expert?</p>

              <Link
                role="button"
                to="/course-listing"
                className="btn btn-success p-2">
                GET STARTED
              </Link>
            </Col>
            <Col md={12} lg={4} className="d-none d-lg-block">
              <PC />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
