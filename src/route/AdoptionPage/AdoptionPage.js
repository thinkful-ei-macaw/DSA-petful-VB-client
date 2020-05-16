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
    type:''
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
      fetch(`${Config.CLIENT_ORIGIN}pets`),
      fetch(`${Config.CLIENT_ORIGIN}people`),
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
    fetch(`${Config.CLIENT_ORIGIN}people`, {
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
  //every 5 seconds remove person + animal 
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

  //pass type from selectAnimalBtn 
  adopt = async (type) => {
    await this.deletePet(type);
    await this.handleGetPets();
  };
//pass type from adopt to remove selected animal type
  deletePet = (type) => {
    return fetch(`${Config.CLIENT_ORIGIN}pets`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: type }),
    });
  };
//get data from btn based on what user clicked on and adopt it
  selectAnimalBtn=(type)=>{
    //if type all send request 2x with cat or dog
    if(type==='all'){
      this.adopt('cat');
      this.adopt('dog');
      alert("You have adopted a cat and dog");
    }
    //else adopt just once
    this.adopt(type);
    alert(`You have adopted a ${type}`);
  }

  render() {
    console.log(this.state.cat);
    return (
      <div>
        <Pet
          cat={this.state.cat}
          dog={this.state.dog}
          showAdoptBtn={this.showAdoptBtn}
          selectAnimalBtn={this.selectAnimalBtn}
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
