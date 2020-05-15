import React from 'react';

export default class Pet extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Image:DOG</li>
                    <li>Description:Broad shouldered, brown eyed, brown coat</li>
                    <li>Name: Stefano</li>
                    <li>Gender: Nonbinary</li>
                    <li>Breed: Bull mastiff</li>
                    <li>Journey:Rolled up to the shelter on his Harley, smoking a cigarette like a cool cat</li>
                </ul>

                <button>Adopt me!</button>
                <ul>
                    <li>Image: CAT</li>
                    <li>Description:Slender and silky coat, super sharp claws</li>
                    <li>Name: Buggsy</li>
                    <li>Gender: Female</li>
                    <li>Breed: Persian</li>
                    <li>Journey:Carried in by winged angels</li>
                </ul>
                <button>Adopt me!</button>
            </div>
        )
    }
}