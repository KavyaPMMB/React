import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Spread() {
  const [fruit, setfruit] = useState({
    name: "apple",
    color: "red",
  });
  const change = () => {
    setfruit((prevob) => {
      return { ...prevob, color: "white" };
    });
  };
  return (
    <div>
      <p>
        The fruit is {fruit.name} and color is {fruit.color}{" "}
      </p>
      <Button onClick={change}>Change</Button>
    </div>
  );
}

export default Spread;
