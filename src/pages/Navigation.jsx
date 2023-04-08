import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// icons
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaHome />
            </Nav.Link>
            <Nav.Link href="#deets">About me</Nav.Link>
            <Nav.Link href="#deets">Education</Nav.Link>
            <Nav.Link href="#deets">Skills</Nav.Link>
            <Nav.Link href="#deets">Experiences</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
