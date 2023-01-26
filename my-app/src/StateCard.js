import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function StateCard() {
  const [num, setnum] = useState(0);
  return (
    <div>
        <center>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{fontFamily:'fantasy',fontStyle:'italic'}}>my number is {num}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" onClick={() => setnum(num + 1)}>
            Increment
          </Button>
          <Button variant="primary" onClick={() => setnum(num - 1)}>
            Decrement
          </Button>
        </Card.Body>
      </Card>
      </center>
    </div>
  );
}
export default StateCard;
