import React from "react";

export default function People(props) {
  console.log(props.people);

  const data = props.people.map((x, id) => {
    return <li key={id}>{x}</li>;
  });

  return (
    <div>
      <h3>List of people waiting to adopt</h3>
      <ul>{data}</ul>
    </div>
  );
}
