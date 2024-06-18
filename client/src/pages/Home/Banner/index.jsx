import React from 'react';
import './banner.css';
import Particle from '../../../components/Particle';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import hello from '../../../assets/svg/Hello.gif';
import { useSize } from '../../../hooks/useSize';

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
              <div className="type-writer fw-bold primary-text-color">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Namaste Dev!')
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString('Best Learning!')
                      .pauseFor(2500)
                      .deleteChars(9)
                      .typeString('Courses!')
                      .pauseFor(2500)

                      .start();
                  }}
                  options={{
                    // strings: ["Namaste Dev", "Best Learning!",],
                    autoStart: true,
                    loop: true,
                    // skipAddStyles: true,
                    // wrapperClassName: "fs-1 fw-bold",
                    // cursorClassName: "Typewriter__cursor fs-1 fw-bold",
                  }}
                />
              </div>
              <p className="fs-5">Want to be a Frontend Expert?</p>
              <a href="/course-listing">
                <Button variant="success" className="p-2">
                  GET STARTED
                </Button>
              </a>
            </Col>
            <Col md={12} lg={6} className="d-none d-md-block">
              <Image
                src={hello}
                alt="namaste"
                className=""
                width={200}
                height={200}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
