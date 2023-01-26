import React, { useState } from 'react'
import Props4 from './Props4'

function Props3() {
    const [first, setfirst] = useState([{name:"apple",color:"red"},
{name:"banana",color:"yellow"}])
  return (
    <div>
        <Props4 first={first}/>
    </div>
  )
}

export default Props3