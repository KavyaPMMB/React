import React, { useState } from 'react'
import {Card,Button} from "react-bootstrap"
import { Userstate } from './Context/UserProvider'

function Array() {
  const {a,first}=Userstate()
    const [car, setcar] =useState({
        brand:"Ford",
        color:"red"
    })
    const Colorchange =()=> {
        setcar(prevobj=>{return{...prevobj,color:"white"}})
    }
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={first.image} />
      <Card.Body>
        <Card.Title>The car is {car.brand} and its color is {car.color}</Card.Title>
        <Card.Text>{a},{first.name},{first.salary}

        </Card.Text>
        <Button variant="primary" onClick={Colorchange}>Change</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Array