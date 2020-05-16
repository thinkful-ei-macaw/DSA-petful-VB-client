import React from "react";

export default function People(props) {
  console.log(props.people);
//iterate through data to get people's names
  const data = props.people.map((x, id) => {
    return <li key={id}>{x}</li>;
  });

  return (
    <div>
      <h3>List of people waiting to adopt</h3>
      <ul>{data}</ul>

      {/* do not show button after user submits */}
      {props.showSubmitBtn &&<div>
      <input type="text" placeholder="your name" value={props.name} onChange={props.onChange} />
      <button onClick={props.onClick}>Submit</button>
      </div>}
    </div>
  );
}
