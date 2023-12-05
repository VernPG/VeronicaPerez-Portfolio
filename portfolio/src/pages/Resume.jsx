import { useState } from "react";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import React from "react";
import Exp from "../components/Exp";
import Edu from "../components/Edu";
import Skills from "../components/Skills";
import Accordion from "react-bootstrap/Accordion";
import Highlights from "../components/Highlights";

export default function Resume() {
  return (
    <>
    <h1 className="highlights">Career Highlights <br /> and Expertise</h1>
      <Button variant="secondary" size="lg" href="https://docs.google.com/document/d/1UIwlki9wQJkYT6mgr0acZovrhGCKQAzJEk6APnDW0gY/edit?usp=sharing">
      Download the extended version of my resume by clicking here.
      </Button>
      <section>
        <Accordion className="accordion" fade>
          <Accordion.Item className="resume" eventKey="0">
            <Accordion.Header>Skills</Accordion.Header>
            <Accordion.Body>
              <Skills />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="resume">
              Business Experience
            </Accordion.Header>
            <Accordion.Body>
              <Exp />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="resume">Education</Accordion.Header>
            <Accordion.Body>
              <Edu />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
}
