import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Useeffect() {
    alert("place")
    const [first, setfirst] = useState("Nice");
    useEffect(() => {
      alert(`Try${first}`)
    }, [first])
    
  return ( 
    <div>
        <h1>{first}</h1>
        <Button onClick={()=>setfirst("hope")}>Change</Button>
    </div>
  )
}

export default Useeffect