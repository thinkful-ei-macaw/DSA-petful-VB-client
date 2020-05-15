import React from "react";
import Pet from "../../component/Pets/Pet";
import People from "../../component/People/People";
import Config from "../../config";
export default class AdoptionPage extends React.Component {
  state = {
    dog: {},
    cat: {},
    people: [],
  };
  componentDidMount() {
    return this.handleGetPets();
  }

  handleGetPets = () => {
    return Promise.all([
      fetch(`${Config.API_ENDPOINT}pets`),
      fetch(`${Config.API_ENDPOINT}people`),
    ])
      .then(([petRes, peopleRes]) => {
        if (!petRes.ok) return petRes.json().then((e) => Promise.reject(e));
        if (!peopleRes.ok)
          return peopleRes.json().then((e) => Promise.reject(e));

        return Promise.all([petRes.json(), peopleRes.json()]);
      })
      .then(([petRes, peopleRes]) => {
        this.setState({
          dog: petRes[1].dog,
          cat: petRes[0].cat,
          people: peopleRes,
        });
      })
      .catch((error) => console.log({ error }));
  };

  render() {
    console.log(this.state.cat);
    return (
      <div>
        <Pet cat={this.state.cat} dog={this.state.dog}/>
        <People people={this.state.people} />
      </div>
    );
  }
}
