import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  var [myList, setMylist] = useState([
    { id: 1, value: "seif", checked: false },
    { id: 2, value: "rawan ma tetghachech", checked: false },
    { id: 3, value: "malek dima nice", checked: false },
  ]);
  console.log(myList);
  return (
    <div className="App">
      <input />
      <button
        onClick={() => {
          setMylist([...myList,{ id: 4, value: "malek dima nice", checked: false }]);
          
        }}
      >
        Add task
      </button>
      {myList.map((elem, i) => (
        <div>
          <AddItem value={elem.value}/>
        </div>
      ))}
    </div>
  );
}

export default App;
