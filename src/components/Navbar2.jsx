import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg"

export default function Navbar2() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="icon" href="/">
          <img
            src={logo}
            width="150"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="Resume">Resume</Nav.Link>
          <Nav.Link href="Project">Projects</Nav.Link>
          <Nav.Link href="About">About </Nav.Link>
          <Nav.Link href="Contact">Contact </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
