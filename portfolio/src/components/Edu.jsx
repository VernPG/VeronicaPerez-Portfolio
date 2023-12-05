import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Edu() {
  return (
    <Container className="resume">
      <Row>
        <Col className="edu">
          <header>University of Minnesota</header>
          <li>Full Stack Web Development</li>
          <date>September 18, 2023-December 14, 2023</date>
  
        <br />

        <header>University of Minnesota Crookston </header>
          <li>Bachelor’s Degree in Business Management</li>
          <date>September 2009-May 2011</date>
     
          <br />

          <header>College of Southern Nevada</header>
          <li>General Studies</li>
          <date>September 1998-May 2004</date>

          </Col>
      </Row>
    </Container>
  );
}
