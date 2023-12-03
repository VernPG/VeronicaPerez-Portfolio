import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <header>
        <h2>Welcome to the Portfolio of</h2>
        <h1>Veronica Perez</h1>
      </header>

      <aside>
        
        {/* <Stack direction="horizontal" gap={3}>
          <Link to="#Resume" className="p-2">Resume</Link>
          <Link to="#Projects" className="p-2">Projects</Link>
          <Link to="#About" className="p-2">About & Contact</Link>
        </Stack> */}

        <Card>

          <Card.Body>
            <Card.Title>~A Bit About Me~</Card.Title>
            <Card.Text className="card">
              "As a seasoned leader with 25 years of management experience, I
              have developed a deep understanding of what it takes to build and
              manage high-performing teams. I am passionate about developing
              innovative solutions to complex problems, and I believe that my
              skills and experience make me an ideal candidate for a product
              manager role."
            </Card.Text>
          </Card.Body>
        </Card>
      </aside>
    </>
  );
}
