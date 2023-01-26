import React, { useEffect, useState } from 'react'

function Sample() {
    const [first, setfirst] = useState("hloooo")
    useEffect(() => {
        alert(`hiii ${first}`)
      
    },[first])

   
    
  return (
    <div>
        {first}
        <button onClick={()=>setfirst("welcome")}>change</button>
    </div>
  )
}

export default Sample