import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function Login2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card style={{ width: "500px", padding: "20px" }}>
        <Card.Title style={{ textAlign: "center" }}>
          <h2>LOGIN</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="email" placeholder="Enter username" value={username} onChange={handleUsername} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ justifyContent: "center", display: "block", margin: "0 auto" }}>
              LOGIN
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login2;
