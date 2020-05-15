import React from 'react';
import Pet from '../../component/Pets/Pet'
import Config from '../../config'
export default class AdoptionPage extends React.Component{
    state={
        dog: {},
        cat: {},
    }
    componentDidMount(){
        return this.handleGetPets();
    }
    handleGetPets=()=>{
        return fetch(`${Config.API_ENDPOINT}pets`)
            .then(res=>{
                console.log(res)
                return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            })
            .then((animals)=>{
                console.log(animals)
                this.setState({
                    dog: animals[1].dog,
                    cat: animals[0].cat,

                })
            })
            .catch(error=>console.log({error}))
    }

    render(){
        console.log(this.state.cat)
        return(<Pet cat={this.state.cat} dog={this.state.dog}/>)
    }
}