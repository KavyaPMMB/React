import React from "react";

function Hello2() {
  const a = [
    { id: 1, name: "kavya", salary: 30000 },
    { id: 2, name: "navya", salary: 40000 },
  ];
  console.log(a);

  return a.map((Card) => (
    <div>
      <h1>
        {Card.id},{Card.name},{Card.salary}
      </h1>
    </div>
  ));
}

export default Hello2;
