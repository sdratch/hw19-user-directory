import React from "react";

const TableRow = (props) => {
  return (
    <tr>
      <th>
        <img
          className="avatar"
          src={props.image}
          alt="Avatar"
        ></img>
      </th>
      <th>
        {props.name}
      </th>
      <th>{props.email}</th>
      <th>{props.cell}</th>
      <th>{props.city}</th>
    </tr>
  );
};

export default TableRow;
