import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbar2(){
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="icon" >
            <img
            src="/src/assets/newLogoCircle.svg"
            width="150"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Homepage">Home</Nav.Link>
            <Nav.Link href="Resume">Resume</Nav.Link>
            <Nav.Link href="Project">Projects</Nav.Link>
            <Nav.Link href="About">About & Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}