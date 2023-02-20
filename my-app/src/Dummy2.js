import axios from 'axios'
import React, { useState } from 'react'

function Dummy2() {
    axios.get('shttps://dummyjson.com/product').then((display)=>{
        setfirst(display.data.products)
        
    })
    const [first, setfirst] = useState([])
  return (
    <div>
        {first.map((display)=>(
            <h2>{display.title}</h2>
        ))}
    </div>
  )
}

export default Dummy2