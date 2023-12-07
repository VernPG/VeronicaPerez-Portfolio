import React from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="highlights">About Me </h1>
      <Card className="container">
        <Card.Body>
          <Card.Text className="text-muted">
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
            href="https://www.linkedin.com/in/veronica-perez-9714b28/"
          >
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
