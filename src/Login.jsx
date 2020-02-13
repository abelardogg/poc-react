import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

  //  this.handleChange = this.handleChange.bind(this);
  }

  

  render() {
    return (
      <form action="/login" method="POST">
        <p>Login</p>
        <input placeholder="email" type="text"  name="email"/>
        <br/>
        <input placeholder="password" type="text"  name="password"/>
        <br/>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export default Login;

const wrapper = document.getElementById("login");
wrapper ? ReactDOM.render(<Login />, wrapper) : false;