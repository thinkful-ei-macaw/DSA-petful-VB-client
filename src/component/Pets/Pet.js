import React from "react";

export default function Pets(props) {

  return (
    <div>
      <ul>
        <li>
          Image:
          <img alt={props.cat.description} src={props.cat.imageURL} />
        </li>
        <li>Description:{props.cat.description}</li>
        <li>Name:{props.cat.name}</li>
        <li>Gender: {props.cat.gender}</li>
        <li>Breed: {props.cat.breed}</li>
        <li>Journey:{props.cat.story}</li>
      </ul>

      {props.showAdoptBtn && (
        <button onClick={() => props.selectAnimalBtn("cat")}>Adopt this cat!</button>
      )}
      <ul>
        <li>
          Image: <img alt={props.dog.description} src={props.dog.imageURL} />
        </li>
        <li>Description:{props.dog.description}</li>
        <li>Name: {props.dog.name}</li>
        <li>Gender: {props.dog.gender}</li>
        <li>Breed: {props.dog.breed}</li>
        <li>Journey:{props.dog.story}</li>
      </ul>
      {props.showAdoptBtn && (
        <button onClick={() => props.selectAnimalBtn("dog")}>Adopt this dog!</button>
      )}
      <div>
          <p>I love all animals!</p>
        {props.showAdoptBtn && (
        <button onClick={() => props.selectAnimalBtn('all')}>Adopt all!</button>
      )}
      </div>
    </div>
  );
}
