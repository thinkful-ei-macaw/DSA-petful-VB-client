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
    type: "",

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
      fetch(`${Config.REACT_APP_API_BASE}pets`),
      fetch(`${Config.REACT_APP_API_BASE}people`),
    ])
      .then(([petRes, peopleRes]) => {
        if (!petRes.ok) return petRes.json().then((e) => Promise.reject(e));
        if (!peopleRes.ok)
          return peopleRes.json().then((e) => Promise.reject(e));
        console.log(';p;uhuh',petRes)
        console.log('hehehee', peopleRes)
        return Promise.all([petRes.json(), peopleRes.json()]);
      })
      .then(([petRes, peopleRes]) => {
        console.log('kiiijjijji', peopleRes)
        console.log('ijijijij',petRes)
          
          this.setState({
            dog: petRes[1] ? petRes[1].dog:null,
            cat: petRes[0] ? petRes[0].cat:null,
            people: peopleRes ? peopleRes : [],
          })

        
      })
      .catch((error) => console.log({ error }));
  };
  nameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  nameSubmit = () => {
    //submit to server
    //add name to waitlist
    fetch(`${Config.REACT_APP_API_BASE}people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person: this.state.name }),
    })
      .then(() => {
        this.handleGetPets().then(() => {
          if (this.showAdoptBtn) {
            //if at the front start acting people
            this.autoAddPeople();
          } else {
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
      let deciding = Math.floor(Math.random() * 2)
      let type;
      if(deciding === 0){
        type = 'cat'
      } else if(deciding===1){
        type = 'dog'
      }
      this.adopt(type).then(() => {
        if (this.showAdoptBtn) {
          //if at the front start acting people
          this.autoAddPeople();
        } else {
          //if not in front of line do this
          this.autoAdopt();
        }
      });
    }, 2000);
  };
  addPeeps() {}
  autoAddPeople = (i = 0) => {
    let newPeeps = ["Ricky", "Julianne", "Bubbles", "Trevor", "Randy"];

    setTimeout(() => {
      fetch(`${Config.REACT_APP_API_BASE}people`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ person: newPeeps[i] }),
      });
      let newPeople = this.state.people;
      newPeople.push(newPeeps[i]);
      this.setState({
        people: newPeople,
      });
      i++;
      if (this.state.people.length < 5) {
        this.autoAddPeople(i);
      }
    }, 1000);
  };

  //pass type from selectAnimalBtn
  adopt = async (type) => {
    await this.deletePet(type);
    await this.handleGetPets();
  };
  //pass type from adopt to remove selected animal type
  deletePet = (type) => {
    return fetch(`${Config.REACT_APP_API_BASE}pets`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: type }),
    });
  };
  //get data from btn based on what user clicked on and adopt it
  selectAnimalBtn = (type) => {
    //if type all send request 2x with cat or dog
    if (type === "all") {
      this.adopt(type);
      alert("You have adopted a cat and dog");
    } else {
      //else adopt just once
      this.adopt(type);
      alert(`You have adopted a ${type}`);
    }
  };

  render() {
    
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
