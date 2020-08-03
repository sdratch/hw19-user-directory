import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow"

class Home extends Component {
  state = {
    people: [],
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((res) => {
        this.setState({ people: res.data.results });
        console.log(this.state.people);
      })
      .catch((err) => {
        console.log(err);
      });
  }

sortEmployees = () => {
    function compare(a, b){
    if (a.name.first < b.name.first) {return -1;}
     if (a.name.first > b.name.first) {return 1;}
    return 0;
   };
   this.setState( {people: this.state.people.sort(compare)}) //returns an array
   console.log(this.state.people)
   //then set the state
}

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col" 
            onClick={() => this.sortEmployees()}><button className = "btn btn-light">Name</button></th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {this.state.people ? (
            this.state.people.map((person, index) => (
              <TableRow 
              key={index}
              image = {person.picture.thumbnail}
              name = {person.name.first + " " + person.name.last}
              email = {person.email}
              cell = {person.cell}
              city = {person.location.city}
              />
            ))
          ) : (
            <h1>noresults</h1>
          )}
        </tbody>
      </table>
    );
  }
}

export default Home;

//sorting

//sort when onclick name
//might add a on hover to show it is clickable or button


//remeber if passing in actual call make a call back function
