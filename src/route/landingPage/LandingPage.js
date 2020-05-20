import React from "react";
import { Link } from "react-router-dom";


export default class LandingPage extends React.Component {


  render() {
    return(
      <div>
        <img alt="pug." src='https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
        <p>age: 3</p>
        <p>breed: Pug</p>
        <p>description: pug.</p>
        <p>gender: Male</p>
        <p>name: Doogie</p>
        <p>story: Owner Passed away</p>
        <p>Welcome to Petful!:
            This shelter is based on a first come first server basis, FOR THE ANIMALS NOT YOU YOU GREEDY HUMAN. You're adopiton options are limited to the pets that have had the longest stay at the shelter out of all the pets in the shelter at the time you are visiting. Please move onto the adoption page and decide if you would like to adopt one of the wonderful pets we currently have available to you. Additionally, you must wait your turn in line before you will be presented with the ability to adopt.
        </p>
        <Link className='link' to={"/adoption"}>Start the adoption process</Link>
      </div>
    )
  }
}
