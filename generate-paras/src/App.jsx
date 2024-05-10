import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, SetParagraphs] = useState([]);

  const paras = () => {
    if (count > 8 || count < 1) {
      alert("Enter number ranges between 1-8");
      setCount(1);
      return;
    }
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(data[i]);
    }
    SetParagraphs(arr);
  };

  return (
    <>
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          width: "330px",
        }}>
        <h2>Paragrpahs:</h2>
        <input
          type="number"
          min={"1"}
          max={"8"}
          placeholder="0"
          style={{ width: "40px", height: "30px" }}
          width={"40"}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={paras}>GENERATE</button>
      </div>
      <div>
        {paragraphs.map((x, i) => {
          return (
            <p className="text" key={i}>
              {i + 1 + ")"}
              {x.para}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
