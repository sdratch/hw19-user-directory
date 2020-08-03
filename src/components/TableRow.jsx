import React from "react";

//component to fill in the rows
const TableRow = (props) => {
  return (
    <tr>
      {/* image column */}
      <th>
        <img
          className="avatar"
          src={props.image}
          alt="Avatar"
        ></img>
      </th>
      {/* full name column */}
      <th>
        {props.name}
      </th>
      {/* email column */}
      <th>{props.email}</th>
      {/* cell phone number column */}
      <th>{props.cell}</th>
      {/* city column */}
      <th>{props.city}</th>
    </tr>
  );
};

export default TableRow;
