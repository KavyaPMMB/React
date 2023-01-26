import React from "react";

function Map() {
  const fruits = [
    { fname: "Apple", color: "red" },
    { fname: "orange", color: "orange" },
    { fname: "Mango", color: "yelllow" },
  ];
  return fruits.map((display) => (
    <div>
      {display.fname},{display.color}
    </div>
  ));
}

export default Map;
