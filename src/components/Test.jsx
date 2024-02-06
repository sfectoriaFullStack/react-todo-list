import React, { Component } from "react";
import AddItem from "./AddItem";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, value: "seif", checked: false },
        { id: 2, value: "rawan ma tetghachech", checked: false },
        { id: 3, value: "malek dima nice", checked: false },
      ],
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex">
            <input className="form-control" />
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("hello");
                this.setState({
                  tasks: [
                    ...this.state.tasks,
                    { id: 4, value: "malek dima nice", checked: false },
                  ],
                });
              }}
            >
              Add task
            </button>
           
          </div>
          {this.state.tasks.map((elem, i) => (
            <div key={i}>
              <AddItem value={elem.value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
