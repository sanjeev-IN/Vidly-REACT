import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { register } from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  Schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = async () => {
    try {
      const { headers } = await register(this.state.data);
      auth.loginWithJwt(headers['x-auth-token']);
      window.location = '/';
    }
    catch (ex) {
      if (ex.response && ex.resonse.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return <div>
      <h1>Register</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    </div>;
  }
}

export default RegisterForm;