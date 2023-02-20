import axios from 'axios'
import React from 'react'

function Dummy() {
    axios.get('https://dummyjson.com/carts').then((display)=>{
        console.log(display)
    })
  return (
    <div></div>
  )
}

export default Dummy