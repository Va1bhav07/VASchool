import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/svg/VAS.svg';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="border-bottom">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          <Image src={logoImage} alt="VASchool" className="" height={40} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navlinks />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
