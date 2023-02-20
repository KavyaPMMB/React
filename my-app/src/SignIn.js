import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card className="border-secondary mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="text-center mb-4">Sign In</Card.Title>
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignIn;
