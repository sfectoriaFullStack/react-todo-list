import React, { Component } from "react";
import AddItem from "./AddItem";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      tasks: [],
    };
    this.setState=this.setState.bind(this)
  }
  componentDidMount(){
   let list =localStorage.getItem('tasks')
   if(list){
    this.setState({tasks:JSON.parse(list)})
   }
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <div className="d-flex">
            <input
              className="form-control"
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("hello");
                let lastId=localStorage.getItem('lastId')
                this.setState({
                  tasks: [
                    ...this.state.tasks,
                    { id: +lastId+1, value: this.state.value, checked: false },
                  ],
                });
                localStorage.setItem(
                  "tasks",
                  JSON.stringify([
                    ...this.state.tasks,
                    { id: +lastId+1, value: this.state.value, checked: false },
                  ])
                );
                localStorage.setItem('lastId',+lastId+1)
              }}
            >
              Add task
            </button>
          </div>
          {this.state.tasks.map((elem, i) => (
            <div key={i}>
             <AddItem elem={elem} i={i} state={this.state} setState={this.setState}/> 
            </div>
          ))}
        </div>
      </div>
    );
  }
}
