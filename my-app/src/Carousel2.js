import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Carousel2() {
    const a=[{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg_WH3T_eoKPs7bFvKIh7qB8Ohk_yrnkz1w&usqp=CAU"}
    ,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUB8HM7pTiCwJ4kFKOgZxfvS57p4NJLVNTQ&usqp=CAU"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5DcyBJQqoSROQRmIEZlis52mgvei1m1FdBw&usqp=CAU"}]
  return (
   
    <div>
        <Carousel>
        {a.map((display)=>{
          return(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
)
})}
    </Carousel>    
    </div>
  )
}

export default Carousel2