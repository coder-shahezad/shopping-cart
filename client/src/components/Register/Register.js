import React from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <div className="row my-4 d-flex justify-content-center">
      <div className="col-lg-5">
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <div className="col-lg-4">
        <Form>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter first name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="password" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailId">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="pasword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPasword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Button variant="danger" type="button" className="w-100">
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
