import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Loginform = () => {
  const [user, setUser] = useState({ username: "nikhil", password: "123" });

  const clickHandler = (e) => {
    e.preventDefault();

    console.log("the submit button has been clicked ");

    
  };

  const changeHandler = (e) => {
    

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mx-5 my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.username}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={clickHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Loginform;
