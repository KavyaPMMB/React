import React from "react";

function Props7({ first, ob,setfirst,array2 }) {
  console.log(first);
  console.log(ob.emp);
  
  return first.map((display) => (
    <div>
        <button onClick={()=>setfirst(array2)}>Change</button>
      <h1>
        {ob.emp}
        {ob.salary}
      </h1>
      <h2>
        {display.name}
        {display.age}
      </h2>
    </div>
  ));
}

export default Props7;
