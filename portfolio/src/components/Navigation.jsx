

import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
        <>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">About & Connect</Navbar.Brand>
            </Container>
          </Navbar>
          <br />
          
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand>Resume</Navbar.Brand>
            </Container>
          </Navbar>
          {/* <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/img/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar> */}
          <br />
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src= "/src/assets/rubaitul-azad-HLQDfaJUTVI-unsplash.jpg"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
                Projects
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src= "/src/assets/alexander-shatov-9Zjd7PE_FRM-unsplash.jpg"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
                LinkedIn
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
    }
    

