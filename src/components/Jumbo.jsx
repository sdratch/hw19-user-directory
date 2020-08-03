import React from "react";

const Jumbo = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Tracjer</h1>
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
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
