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

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
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

// sortEmployees = (field) =>{
//     function compare(a, b)
//     if (a.[field] < b.[field]) {return -1;}
//      if (a.[field] > b.[field]) {return 1;}
//     return 0;
//    });
//    //setState(this.employees.sort(compare)) //returns an array
//    //then set the state
// }
//remeber if passing in actual call make a call back function
