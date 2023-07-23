import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="row my-4 d-flex justify-content-center align-items-center">
      <div className="col-lg-5">
        <h2>Login</h2>
        <p>Get access to your Orders. Wishlist and Recommendations</p>
      </div>
      <div className="col-lg-4">
        <Form>
          <Form.Group className="mb-3" controlId="emailId">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pasword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="button" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
