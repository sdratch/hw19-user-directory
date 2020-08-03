import React, { Component } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";
import Jumbo from "../components/Jumbo";
import TableHeader from "../components/TableHeader";

class Home extends Component {
  
  state = {
    filter: "",
    people: [],
    filterArr: [],
  };

  //on loading the page it will generate a list of 50 random users from the randomuser api
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        //set the state of people to the list returned
        this.setState({ people: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }
//Function to sort the employees in descending order
  sortEmployees = () => {
    function compare(a, b) {
      //compate the first names
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    }
    //sets the people array to the newly created sorted array
    this.setState({ people: this.state.people.sort(compare) });
  };

  //function to handle the input change in the filter input
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
    //call the filter employee function sending in the filter state
    this.filterEmployees(value);
  };

  filterEmployees(value) {
    //compare the first or last name with the inputed letters in the filter input
    const file = value.toLowerCase();
    const arr = this.state.people.filter(function (person) {
      return (person.name.first.toLowerCase().includes(file)
      || person.name.last.toLowerCase().includes(file));
    });
    //set the key filterArr to the filtered array
    this.setState({ filterArr: arr });
  }

  render() {
    return (
      <>
        {/* jumbotron component */}
        <Jumbo filter = {this.state.filter} onChange = {this.handleInputChange}/>
      
        <table className="table">
          {/* table header component */}
          <TableHeader sortEmployees={this.sortEmployees}/>
          <tbody>
            {/* conditional to make it show up after the componentDidMount call */}
            {this.state.people ? (
              // Conditional to use either the filtered array or the full array
              this.state.filter === "" ? (
                //if the filter input field is empty use the people array
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
              //if the filter input has something there then use the filter array that is filtered
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
              //if there is no results
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
