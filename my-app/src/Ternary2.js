import React from 'react'
import { useState } from 'react'
import State from './State'

function Ternary2() {
    const [hide,sethide ] = useState(false)
    const click=()=>{
        sethide((abc)=>!abc)
    }
  return (
    <div>
        {hide ? <State/>:""}
        <button onClick={click}>{hide===true?"hide":"show"}</button>
    </div>
  )
}

export default Ternary2