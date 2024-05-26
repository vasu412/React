import { useState } from "react";
import "./App.css";
import employees from "./employees";
import Right from "./right";
import Left from "./left";

function App() {
  const [dis, setDis] = useState("none");
  const [list, setList] = useState([]);

  function add(first_name, last_name, age) {
    let obj = {
      first_name: first_name,
      last_name: last_name,
      age: age,
    };
    setList((prevList) => [...prevList, obj]);
  }

  function sort() {
    let sortedList = [...list].sort((a, b) => a.age - b.age);
    console.log(sortedList);
    setList(sortedList);
  }

  function remove(first_name) {
    setList((prevList) => {
      return prevList.filter((item) => item["first_name"] !== first_name);
    });
  }

  return (
    <div className="main">
      <div className="left">
        <h1>Employees</h1>
        <Right add={add} dis={dis} />
      </div>
      <div className="right">
        <h1>Team</h1>
        <button onClick={sort}>Sort by AGE</button>
        <Left list={list} remove={remove} setDis={setDis} />
      </div>
    </div>
  );
}

export default App;
