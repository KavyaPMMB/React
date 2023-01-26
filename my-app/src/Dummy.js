import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Dummy() {
    axios.get('https://dummyjson.com/products').then((abc)=>{
        console.log(abc.data.products)
        setfirst(abc.data.products)
    })
    const [first, setfirst] = useState([])
  return (
    <div>
        {first.map((abc)=>(
            <p>{abc.title}</p>
        
        )
        )}
    </div>
  )
}

export default Dummy