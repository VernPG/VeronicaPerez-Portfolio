import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import linkedin from "../assets/linkedinphoto.jpeg";

export default function Homepage() {
  return (
    <>
      <header>
        <h2>Welcome to the Portfolio of</h2>
        <h1>Veronica Perez</h1>
      </header>

      <div
        className="container mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p className="cardProfile text-muted">
                  "As a seasoned leader with 25 years of management experience,
                  I have developed a deep understanding of what it takes to
                  build and manage high-performing teams. I am passionate about
                  developing innovative solutions to complex problems, and I
                  believe that my skills and experience make me an ideal
                  candidate for a product manager role."
                </p>
                <Card.Link
                  className="links"
                  href="https://www.linkedin.com/in/veronica-perez-9714b28/"
                >
                  LinkedIn
                </Card.Link>

                <Card.Link className="links" href="/Contact">
                  Contact Me
                </Card.Link>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={linkedin} alt="Profile" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
