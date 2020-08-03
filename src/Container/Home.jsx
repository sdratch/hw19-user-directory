import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    people: "",
  };

  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        this.setState({ people: res });
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/thumb/women/31.jpg"
                alt="Avatar"
              ></img>
            </td>
            <td>Casey Janett</td>
            <td>asdf@asdg.com</td>
            <td>549439439349</td>
            <td>Atlanta</td>
          </tr>
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
