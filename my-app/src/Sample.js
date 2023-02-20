import React, { useEffect, useState } from 'react'

function Sample() {
    const [first, setfirst] = useState("hloooo")

    
  return (
    <div>
        {first}
        <button onClick={()=>setfirst("welcome")}>change</button>
    </div>
  )
}

export default Sample