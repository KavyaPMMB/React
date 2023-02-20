import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Api() {
    const [product, setproduct] = useState([])
useEffect(() => {
    axios.get('https://dummyjson.com/products').then((display)=>setproduct(display.data.products)

)
}, [])
console.log(product)

  return (
    <div className='row' style={{justifyContent:"center"}}>
        {product.map((display)=>{
            return(
        <Card style={{ width: '18rem' ,float:'left',margin:"15px"}}>
      <Card.Img variant="top" style={{height:"200px"}} src={display.images[0]} />
      <Card.Body>
        <Card.Title>{display.brand}</Card.Title>
        <Card.Title>{display.rating}</Card.Title>
        <Card.Text>{display.category}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            )})}
    </div>
  )
}

export default Api