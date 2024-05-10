import { useState } from "react";
import "./App.css";
import Note from "./note";

function App() {
  const [text, setText] = useState("");
  const [val, setVal] = useState(0);
  const [append, SetAppend] = useState("");

  function appended() {
    SetAppend(<Note text={text} val={val} setVal={setVal()} />);
  }

  return (
    <>
      <h1>Education Planner</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="SUBJECTS"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          className="num"
          min={"1"}
          placeholder="HOURS"
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={appended}>ADD</button>
      </div>
      <div className="plans">{append}</div>
    </>
  );
}

export default App;
