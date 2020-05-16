import React from "react";
import Pet from "../../component/Pets/Pet";
import People from "../../component/People/People";
import Config from "../../config";

export default class AdoptionPage extends React.Component {
  state = {
    dog: {},
    cat: {},
    people: [],
    name: "",
    showSubmitBtn: true,
  };
  componentDidMount() {
    return this.handleGetPets();
  }

  get showAdoptBtn() {
    if (this.state.people[0] === this.state.name) {
      return true;
    } else {
      return false;
    }
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
  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  nameSubmit = () => {
    //submit to server
    //add name to waitlist
    fetch(`${Config.API_ENDPOINT}people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person: this.state.name }),
    })
      .then(() => {
        this.handleGetPets().then(() => {
          console.log("am i at front?", this.showAdoptBtn);
          if (!this.showAdoptBtn) {
            //if not in front of line do this
            this.autoAdopt();
          }
        });
      })
      .catch((error) => console.log(error));

    this.setState({ showSubmitBtn: false });
  };
  autoAdopt = () => {
    setTimeout(() => {
      console.log("hello");
      this.adopt().then(() => {
        console.log(this.showAdoptBtn);
        if (!this.showAdoptBtn) {
          //if still not in front of line do again!
          this.autoAdopt();
        }
      });
    }, 2000);
  };
  adopt = async () => {
    await this.deletePet();
    await this.handleGetPets();
    // .catch((error) => console.log(error));
  };

  deletePet = (type) => {
    return fetch(`${Config.API_ENDPOINT}pets`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "cat" }),
    });
  };

  render() {
    console.log(this.state.cat);
    return (
      <div>
        <Pet
          cat={this.state.cat}
          dog={this.state.dog}
          showAdoptBtn={this.showAdoptBtn}
        />
        <People
          people={this.state.people}
          name={this.state.name}
          onChange={this.nameChange}
          onClick={this.nameSubmit}
          showSubmitBtn={this.state.showSubmitBtn}
        />
      </div>
    );
  }
}
