import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    // contactType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_mcrt3jq",
        "template_ic94pbm",
        formData
      );
      console.log(response);
      if (response.text === "OK") {
        console.log("Email sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          message: "",
          // contactType: "",
        });
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <header>
        <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <p className="cardProfile">
                  "Thank you for visiting my portfolio. I'm excited about the
                  potential to connect with you. If you're interested in
                  exploring opportunities for collaboration, please take a
                  moment to fill out the form below.
                  <br />
                  <br />
                  Provide your name and email, and don't forget to include a
                  message if you express interest in connecting for job
                  opportunities, projects, or professional networking for future
                  endeavors."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <ul className="text-muted">
          "Thank you for visiting my portfolio. I'm excited about the potential
          to connect with you. If you're interested in exploring opportunities
          for collaboration, please take a moment to fill out the form below.
          <br />
          <br />
          Provide your name and email, and don't forget to include a message if
          you express interest in connecting for job opportunities, projects, or
          professional networking for future endeavors."
        </ul> */}
        
      </header>
    
      <Form className="form" onSubmit={handleSubmit}>
      <h2>Message Me for More Info</h2><br />
        <Form.Group as={Row} className="mb-3" controlId="fullName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="name"
              name="fullName"
              value={formData.fullName}
              placeholder="Enter your full name here..."
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email here..."
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="message">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="message"
              name="message"
              value={formData.message}
              placeholder="Type your message here..."
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        {/* <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Check One
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="I have a Job Opportunity for You!"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="I Want to Network with You!"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Let's Schedule a Chat"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Form.Control
                type="contactType"
                name="contactType"
                value={formData.contactType}
                onChange={handleChange}
                placeholder="Other...."
              />
            </Col>
          </Form.Group>
        </fieldset> */}
        {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
