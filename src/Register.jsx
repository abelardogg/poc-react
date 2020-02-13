import React, { Component } from "react";
import ReactDOM from "react-dom";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  

  render() {
    return (
      <form action="/register" method="POST">
        <p>Register a new user</p>
        <input placeholder="email" type="text"  name="email"/>
        <br/>
        <input placeholder="password" type="text"  name="password"/>
        <br/>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export default Register;

const wrapper = document.getElementById("register");
wrapper ? ReactDOM.render(<Register />, wrapper) : false;