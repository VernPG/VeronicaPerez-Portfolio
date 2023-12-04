import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Homepage() {
  return (
    <>
      <header>
        <h2>Welcome to the Portfolio of</h2>
        <h1>Veronica Perez</h1>
      </header>

      {/* <aside>
        <Card>

          <Card.Body>
            <Card.Title className="title text-muted">~A Bit About Me~</Card.Title>
           
            <Card.Text className="card text-muted">
              "As a seasoned leader with 25 years of management experience, I
              have developed a deep understanding of what it takes to build and
              manage high-performing teams. I am passionate about developing
              innovative solutions to complex problems, and I believe that my
              skills and experience make me an ideal candidate for a product
              manager role."
              <img className="float-right" src="/src/assets/linkedinprofile pict 2.jpeg"/>
            </Card.Text>
        
          </Card.Body>
        </Card>

      </aside> */}

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5 className="title text-muted">~A Bit About Me~</h5>
                <p className="card">
                  "As a seasoned leader with 25 years of management experience,
                  I have developed a deep understanding of what it takes to
                  build and manage high-performing teams. I am passionate about
                  developing innovative solutions to complex problems, and I
                  believe that my skills and experience make me an ideal
                  candidate for a product manager role."
                </p>
              </div>
              <div className="profile col-md-6">
                <img
                  src="/src/assets/linkedinprofile pict 2.jpeg"
                  alt="Image"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
