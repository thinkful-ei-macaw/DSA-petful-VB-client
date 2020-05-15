import React from "react";
import { Link } from "react-router-dom";


export default class LandingPage extends React.Component {

  handleSubmit=()=>{

  }

  render() {
    return(
      <div>
        <img alt="landing page cats and dogs" src='https://en.bcdn.biz/Images/2016/11/4/c07c9571-92e9-4e09-a840-d2c17c2bc72f.jpg'/>
        <p>Welcome to Petful!:
            This shelter is based on a first come first server basis, FOR THE ANIMALS NOT YOU YOU GREEDY HUMAN. You're adopiton options are limited to the pets that have had the longest stay at the shelter out of all the pets in the shelter at the time you are visiting. Please move onto the adoption page and decide if you would like to adopt one of the wonderful pets we currently have available to you. Additionally, you must wait your turn in line before you will be presented with the ability to adopt.
        </p>
        <Link className='link' to={"/adoption"}>Start the adoption process</Link>
      </div>
    )
  }
}
