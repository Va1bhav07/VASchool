import React from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const socialLinks = [
  { id: 1, icon: <FiGlobe />, url: "https://www.gooogle.com/" },
  { id: 2, icon: <FiGithub />, url: "https://github.com/" },
  { id: 3, icon: <FiTwitter />, url: "https://twitter.com/" },
  { id: 4, icon: <FiLinkedin />, url: "https://www.linkedin.com/in/" },
  { id: 5, icon: <FiYoutube />, url: "https://www.youtube.com/c/" },
];

const Footer = () => {
  return (
    <Container fluid>
      <Row as="footer" className="align-items-center py-3 border-top">
        <Col md={3} className="align-items-center">
          <span>&copy; 2024 EduFlex. All Rights Reserved.</span>
        </Col>
        <Col as={Nav} md={5} className="justify-content-end">
          <Nav.Link href="/" className="text-muted">
            Home
          </Nav.Link>
          <Nav.Link href="/about-us" className="text-muted">
            About
          </Nav.Link>
          <Nav.Link href="/privacy-policy" className="text-muted">
            Privacy Policy
          </Nav.Link>
          <Nav.Link href="/services" className="text-muted">
            Services
          </Nav.Link>
          <Nav.Link href="/contact" className="text-muted">
            Contact
          </Nav.Link>
        </Col>
        <Col as={Nav} md={4} className="justify-content-end">
          {socialLinks.map((link) => (
            <Nav.Link
              className="text-muted"
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Nav.Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
