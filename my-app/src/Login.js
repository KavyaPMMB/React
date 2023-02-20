import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Login() {
    const [formdata, setformdata] = useState([{email:"kavya@gmail.com",password:"abcdefg"}])
  return (
    formdata.map((display)=>(

    <div style={{display:"flex",textAlign:"center", justifyContent: "center" }}>
        <Card style={{justifyContent:"center",width:"500px"}}>
        <Card.Title style={{textAlign:"center"}}><h2>___LOGIN___</h2></Card.Title>
        <Card.Body>
        <Form style={{justifyContent:"center"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={display.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={display.password} />
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
    ))
  )
}

export default Login