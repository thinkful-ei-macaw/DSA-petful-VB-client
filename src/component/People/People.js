import React from 'react';

export default function People(props){
    console.log(props.people)
    processpeople(props){
        let persons = ''
        for(let i=0; i < props.People.length; i++) {
            let peeps = `<li>${props.people[i]}</li>`;
            persons = persons + peeps;
        }
        return persons
    }

    
    
    return(
            <div>
                <ul>
                        {processpeople()}
                    
                </ul>
            </div>
                )
    }