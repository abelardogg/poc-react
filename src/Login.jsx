import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h3>Login</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form action="/login" method="POST">
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
                Login
            </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <a href={'/register'}>Go to Register</a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

const wrapper = document.getElementById("login");
wrapper ? ReactDOM.render(<Login />, wrapper) : false;