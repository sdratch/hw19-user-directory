import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";
import Jumbo from "../components/Jumbo";

class Home extends Component {
  state = {
    filter: "",
    people: [],
    filterArr: [],
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
    function compare(a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    }
    this.setState({ people: this.state.people.sort(compare) }); //returns an array
    console.log(this.state.people);
    //then set the state
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
    this.filterEmployees(value);
  };

  filterEmployees(value) {
    const file = value.toLowerCase();
    const arr = this.state.people.filter(function (person) {
      return person.name.first.toLowerCase().includes(file);
    });
    console.log(arr);
    this.setState({ filterArr: arr });
  }
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employee Tracker</h1>
            <p className="lead">
              Click the name to sort by name or type to filter by name
            </p>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Filter Name
                </span>
              </div>
              <input
                name="filter"
                valule={this.state.filer}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col" onClick={() => this.sortEmployees()}>
                <button className="btn btn-light">Name</button>
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people ? (
              this.state.filter === "" ? (

              this.state.people.map((person, index) =>
                  <TableRow
                    key={index}
                    image={person.picture.thumbnail}
                    name={person.name.first + " " + person.name.last}
                    email={person.email}
                    cell={person.cell}
                    city={person.location.city}
                  />
              )):
              (
              this.state.filterArr.map((person, index) =>
                  <TableRow
                    key={index}
                    image={person.picture.thumbnail}
                    name={person.name.first + " " + person.name.last}
                    email={person.email}
                    cell={person.cell}
                    city={person.location.city}
                  />
              ))
            ) : (
              <h1>noresults</h1>
            )}
          </tbody>
        </table>
      </>
    );
  }
}

export default Home;

//sorting

//sort when onclick name
//might add a on hover to show it is clickable or button

//remeber if passing in actual call make a call back function
