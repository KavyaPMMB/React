import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [first, setfirst] = useState("Hlooo");
  const [name, setname] = useState("John");
  useEffect(() => {
    alert("Welcome");
  }, [first, name]);

  return (
    <div>
      <h1>{first}</h1>
      <h2>{name}</h2>
      <button onClick={() => setfirst("Welcome")}>Change</button>
      <button onClick={() => setname("Paul")}>Change..</button>
    </div>
  );
}

export default UseEffect2;
