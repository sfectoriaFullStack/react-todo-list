import React from "react";

function AddItem({ value }) {
  return (
    <div className="d-flex justify-content-between p-2">
      <div className="d-flex align-items-center">
        <input type="checkbox" />
        <p className="m-0">{value}</p>
      </div>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
}

export default AddItem;
