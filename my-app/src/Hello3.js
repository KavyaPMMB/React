import React from "react";

function Hello3() {
  const a = ["a", "b", "c"];
  console.log(a);
  return a.map((abc) => (
    <div>
      <h1>{abc}</h1>
    </div>
  ));
}

export default Hello3;
