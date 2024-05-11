import { useState } from "react";
import "./App.css";
import Note from "./note";

function App() {
  const [text, setText] = useState("");
  const [val, setVal] = useState("");
  const [append, SetAppend] = useState([]);

  function appended() {
    const newText = text.trim();
    const newVal = Number(val);

    if (newText && newVal > 0) {
      const newObj = { t: newText, v: newVal };
      SetAppend((prevAppend) => [...prevAppend, newObj]);
      setText("");
      setVal("");
    }
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
      <div className="plans">
        {append.map((x, i) => {
          return <Note text={x.t} val={x.v} key={i} />;
        })}
      </div>
    </>
  );
}

export default App;
