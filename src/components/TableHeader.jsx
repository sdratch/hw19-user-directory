import React from 'react';
// Table hearder component
const TableHeader = (props) => {
    return (
        <thead className="thead-dark">
            {/* The headers for the components */}
            <tr>
              <th scope="col">Image</th>
              {/* using the on click function to sortEmployees */}
              <th scope="col" onClick={() => props.sortEmployees()}>
                <button className="btn btn-light">Name</button>
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
            </tr>
          </thead>
    );
};

export default TableHeader;