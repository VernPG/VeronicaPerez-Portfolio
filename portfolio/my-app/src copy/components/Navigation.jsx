import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <>
      <Navbar
        className="bg-body-tertiary"
        expand="lg"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand href="#home">Get to Know Me More</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="resume" href="#home">
              Resume
            </Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#home">About & Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
