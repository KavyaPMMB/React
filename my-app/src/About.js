import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { newcontext } from './ContextProvider'

const About = () => {
    const display=useContext(newcontext)
    const {first,setfirst,name,setname,car,setcar}=display
    
  return (
    <div>
<h1>{first}</h1>
<Button onClick={()=>setfirst("Explore")}>Change</Button>
{car.map((abc)=>{
    return(
    <h1>{abc.name}  {abc.color}</h1>
)})}

<h3>{name.Name}</h3>
<h3>{name.Age}</h3>

    </div>
  )
}

export default About