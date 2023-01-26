import React from 'react'
import { useState } from 'react'
import Webpage1 from './Webpage1'

function Ternary() {
    const [hide, sethide] = useState(false)
    const click=()=>{
        sethide((dis)=>! dis)
    }
  return (
    <div>
        {hide ? <Webpage1/>:""}
        <button onClick={click}>{hide===true? "hide":"show"}</button>
    </div>
  )
}

export default Ternary