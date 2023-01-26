import React, { useState } from 'react'
import { Userstate } from './Context/UserProvider'

function Array2() {
    const [car, setcar] =useState({
        brand:"BMW",
        color:"black"
    })
    const Colorchange =()=> {
        setcar(prevobj=>{return{...prevobj,color:"white"}})
    }
  return (
    <div>

    
        <h1>The car name is {car.brand} and its color is {car}</h1>
        <button onClick={Colorchange}>Change</button>


    </div>
  )
}

export default Array2