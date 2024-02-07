import React from "react";

function AddItem({ elem,i,state,setState}) {
  return (
    <div className="d-flex justify-content-between p-2">
    <div className="d-flex align-items-center">
      <input
        checked={elem.checked}
        type="checkbox"
        onChange={(e) => {
          let array = [...state.tasks];
          array[i].checked = e.target.checked;
          setState({
            tasks: array,
          });
        }}
      />
      <p
        className="m-0"
        style={{
          textDecoration: elem.checked ? "line-through" : "none",
        }}
      >
        {elem.value}
      </p>
    </div>
    <button
      className="btn btn-danger"
      onClick={() => {
        setState({
          tasks: state.tasks.filter(
            (el, j) => elem.id !== el.id
          ),
        });
      }}
    >
      Delete
    </button>
  </div>
  );
}

export default AddItem;
