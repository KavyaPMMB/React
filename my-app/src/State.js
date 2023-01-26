import React, { useState } from "react";

function State() {
  const [name, setname] = useState("kavya");
  return (
    <div>
      <h1>my name is {name}</h1>
      <button onClick={() => setname(name)}>Change</button>
    </div>
  );
}

export default State;
