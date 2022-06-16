import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="abstract-bg">
      <Row>
        <Col className="margin" xs={5}>
          <br />
          <h3>About Us</h3>
          <p>Presented many delicious foods and beverages catalogs</p>
          <br />
          <br />
          <h3>Contact Details</h3>
          <span>Jakarta, Indonesia</span>
          <br />
          <span>foodjournal@mail.com</span>
        </Col>
        <Col className="margin" xs={5}>
          <br />
          <h3>Get in Touch</h3>
          <br />
          <div className="form-box">
            <Form className="form-margin">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Type your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Type your email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="subject" placeholder="Type subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your message"
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
