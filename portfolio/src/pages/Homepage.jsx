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


      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                {/* <h5 className="title text-muted">~A Bit About Me~</h5> */}
                <p className="cardProfile">
                  "As a seasoned leader with 25 years of management experience,
                  I have developed a deep understanding of what it takes to
                  build and manage high-performing teams. I am passionate about
                  developing innovative solutions to complex problems, and I
                  believe that my skills and experience make me an ideal
                  candidate for a product manager role."
                </p>
              </div>
              <div className="col-md-6">
                <img 
                  className="img-fluid"
                  src="/src/assets/linkedinprofile pict 2.jpeg"
                  alt="Profile"
                  style={{ marginLeft: 'auto', marginRight: '0'}}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
