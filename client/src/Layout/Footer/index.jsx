import React from 'react';
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from '../../assets/svg/VAS.svg';
import { Image } from 'react-bootstrap';

const socialLinks = [
  { id: 1, icon: <FiGlobe />, url: 'https://va1bhav07.vercel.app/' },
  { id: 2, icon: <FiGithub />, url: 'https://github.com/Va1bhav07' },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/va1bhav07/',
  },
];

const Footer = () => {
  return (
    <Container fluid>
      <Row xs={1} lg={3} as="footer" className="align-items-center py-3">
        <Col className="d-flex align-items-center justify-content-center mb-3 mb-lg-0">
          <Image src={logoImage} alt="VASchool" height={40} />
        </Col>
        <Col as={Nav} className="align-items-center justify-content-center">
          <Nav.Link
            href="https://va1bhav07.vercel.app/contact"
            className="text-muted"
            target="_blank">
            Contact
          </Nav.Link>
        </Col>
        <Col as={Nav} className="align-items-center justify-content-center">
          {socialLinks.map((link) => (
            <Nav.Link
              className="text-muted"
              key={link.id}
              href={link.url}
              target="_blank">
              {link.icon}
            </Nav.Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
