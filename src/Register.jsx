import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h3>Register</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form action="/register" method="POST">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <a href={'/login'}>Go to Login</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;

const wrapper = document.getElementById("register");
wrapper ? ReactDOM.render(<Register />, wrapper) : false;