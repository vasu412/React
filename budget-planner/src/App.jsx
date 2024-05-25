import { useState } from "react";
import "./App.css";
import List from "./list";

function App() {
  const [list, setList] = useState([]);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(2000);

  function save(e) {
    e.preventDefault();
    const name = e.target.form[0].value;
    const cost = e.target.form[1].value;
    let obj = {
      name: name,
      cost: cost,
    };
    setSpent((prevSpent) => prevSpent + parseInt(cost));
    setRemaining((prevRemaining) => prevRemaining - cost);
    setList((prevList) => [...prevList, obj]);

    e.target.form[0].value = "";
    e.target.form[1].value = "";
  }

  function del(idx) {
    setList((data) => {
      let c = data[idx].cost;
      setSpent(spent - parseInt(c));
      setRemaining(remaining + parseInt(c));
      return data.filter((item, index) => index !== idx);
    });
  }

  return (
    <>
      <h1>My Budget Planner</h1>
      <div
        style={{
          display: "flex",
        }}
        className="btns">
        <div>Budget: ₹200</div>
        <div>Remaining: ₹{remaining}</div>
        <div>Spent So Far: ₹{spent}</div>
      </div>
      <h2 style={{ textAlign: "start" }}>Add Expenses</h2>
      <form action="#">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="in">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="in">
            <label htmlFor="cost">cost</label>
            <input type="number" id="cost" min={0} />
          </div>
        </div>
        <button type="submit" style={{ marginTop: "15px" }} onClick={save}>
          Save
        </button>
      </form>

      <div>
        <h2>Expenses:</h2>
        {list.map((x, idx) => (
          <List del={del} key={idx} idx={idx} x={x} />
        ))}
      </div>
    </>
  );
}

export default App;
