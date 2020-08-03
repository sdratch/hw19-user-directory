import React, { Component } from "react";
import axios from "axios";

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
        console.log(this.state.people[0].name.first);
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
            this.state.people.map((person) => (
              <tr>
                <th>
                  <img
                    className="avatar"
                    src={person.picture.thumbnail}
                    alt="Avatar"
                  ></img>
                </th>
                <th>
                  {person.name.first} {person.name.last}
                </th>
                <th>
                  {person.email}
                </th>
                <th>
                  {person.cell}
                </th>
                <th>
                  {person.location.city}
                </th>
              </tr>
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
