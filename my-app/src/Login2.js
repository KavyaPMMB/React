import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Login2() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(password);
  const handleUsername = (dis) => {
    setUsername(dis.target.value);
  };
  const handlePassword = (dis) => {
    setPassword(dis.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  }
  
  
  return (
    

    <div style={{display:"flex",textAlign:"center", justifyContent: "center" }}>
        <Card style={{justifyContent:"center",width:"500px"}}>
        <Card.Title style={{textAlign:"center"}}><h2>___LOGIN___</h2></Card.Title>
        <Card.Body>
        <Form name="myform" method="post" onSubmit={handleSubmit} style={{justifyContent:"center"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter User name" value={username} onChange={handleUsername} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{justifyContent:"center"}}>
        LOGIN
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </div>
    
  )
}

export default Login2