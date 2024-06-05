import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import logoImage from "./../../../assets/img/EduFlex.jpg";
import "../../../pages/Home/index.css";

function NavbarComp() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <Image
            src={logoImage}
            alt="Brand Logo"
            roundedCircle
            className=""
            style={{ height: "40px", width: "40px" }}
          />
          {/* <Col className="italic">EduFlex</Col> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navlinks />
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
