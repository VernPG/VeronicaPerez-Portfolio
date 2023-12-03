import React from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

export default function About() {
  return (


    <>
      <Card className="card2" style={{ width: "1180px" }}>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">About Me</Card.Subtitle>
          <Card.Text className="cardtext text-muted">
            <p className="text-muted">
              As a full-stack coding bootcamp graduate, I am seeking
              opportunities in operations, product management, or a human
              resources technical recruiter after I graduate from the course. My
              background includes client experience, management operations,
              human resource, and inventory management.
            </p>

            <p className="text-muted">
              I have experience in recruiting, applicant screening, employee
              orientation, evaluation and placement, small and large scale
              project management, working with vendors, strategic planning,
              budgeting, and business forecasting. I am also experienced in
              developing and implementing new training and employee programs.
            </p>

            <p className="text-muted">
              My excellent ability to address and implement strategic plans for
              talent acquisition, retention, succession planning, and managing a
              fluctuating budget makes me an ideal candidate for any of the
              aforementioned roles.
            </p>
          </Card.Text>
          <p className="mb-2 text-muted">Let's Connect</p>
          <Card.Link
            className="links"
            href="https://docs.google.com/document/d/1z_g0oW8WTrCLP8OUsIzq5weJPPEbX7iU2G3urSuZIKg/edit?usp=sharing"
          >
            Resume
          </Card.Link>
          <Card.Link
            className="links"
            href="https://www.linkedin.com/in/veronica-perez-9714b28/"
          >
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
