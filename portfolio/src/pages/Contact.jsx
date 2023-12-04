import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
 //how do i user the validator?
// import * as EmailValidator from 'email-validator';
//  EmailValidator.validate("test@email.com");

export default function Contact() {
    // const validator = require("email-validator");
    // validator.validate("test@email.com"); 

  return (
    <>
          <header>
        <ul className="text-muted">
          "Thank you for visiting my portfolio. I'm excited about the potential to connect with you. If you're interested in exploring opportunities for collaboration, please take a moment to fill out the form below. Provide your name and email, and don't forget to select the relevant box to indicate your interest in connecting for job opportunities, projects, or professional networking for future endeavors."
        </ul>
      </header>
        <Form className='form'>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Enter your email here..." />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Enter your email here..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="message">
        <Form.Label column sm={2}>
          Message 
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="message" placeholder="Type your message here..." />
        </Col>
      </Form.Group>
      <fieldset>
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
          </Col>
        </Form.Group>
      </fieldset>
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
