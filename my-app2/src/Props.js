import React, { useState } from 'react'
import Props2 from './Props2'

function Props() {const [first, setfirst] = useState([{no:1,name:"kavya"},{no:2,name:"John"},{no:3,name:"James"}])
  return (
    <div>
        <Props2 first={first}/>
    </div>
  )
}

export default Props