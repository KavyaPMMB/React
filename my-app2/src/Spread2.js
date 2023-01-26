import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Spread2() {
  const[flower,setflower]=useState({
    name:"Rose",color:"red"
  })
  const change=()=>{
    setflower((prevob)=>{return{...prevob,color:"white"}})
  }
  return (
    <div>
      <p>flower is {flower.name} and its color is {flower.color}</p>
      <Button onClick={change}>Change</Button>
    </div>
  )
}

export default Spread2