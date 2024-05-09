import { useState } from "react";
import "./App.css";

function App() {
  const [LowerCase, SetLowerCase] = useState(true);
  const [UpperCase, SetUpperCase] = useState(true);
  const [Symbol, SetSymbol] = useState(true);
  const [Numbers, SetNumbers] = useState(true);
  let [Length, SetLength] = useState(8);
  let [Val, SetVal] = useState("");

  function genPass() {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()";
    const numberChars = "0123456789";

    // characters = "A-Za-z0-9!@#$%^&*()".split("").join("");

    let result = "";
    let characters = "";

    if (LowerCase) {
      characters += lowerCaseChars;
    }

    if (UpperCase) {
      characters += upperCaseChars;
    }

    if (Symbol) {
      characters += symbolChars;
    }

    if (Numbers) {
      characters += numberChars;
    }

    for (let i = 0; i < Length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    SetVal(result);
  }

  async function copyToClipboard(text) {
    text = Val;
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard");
    } catch (error) {
      alert("Failed to copy text: ", error);
    }
  }

  return (
    <div className="inputBox">
      <h1>Password Generator</h1>
      <div style={{ display: "flex" }}>
        <input readOnly value={Val} />
        <span onClick={copyToClipboard}>
          <i className="material-icons" style={{ marginLeft: "13px" }}>
            content_copy
          </i>
        </span>
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="uc"
          checked={UpperCase}
          onChange={() => {
            UpperCase ? SetUpperCase(false) : SetUpperCase(true);
          }}
        />
        <label htmlFor="uc">Include Uppercase</label>
        <input
          type="checkbox"
          id="lc"
          checked={LowerCase}
          onChange={() => {
            LowerCase ? SetLowerCase(false) : SetLowerCase(true);
          }}
        />
        <label htmlFor="lc">Include Lowercase</label>
        <input
          type="checkbox"
          id="num"
          checked={Numbers}
          onChange={() => {
            Numbers ? SetNumbers(false) : SetNumbers(true);
          }}
        />
        <label htmlFor="num">Include Numbers</label>
        <br />
        <input
          type="checkbox"
          id="symb"
          checked={Symbol}
          onChange={() => {
            Symbol ? SetSymbol(false) : SetSymbol(true);
          }}
        />
        <label htmlFor="symb">Include Symbols</label>
        <input
          type="number"
          style={{ width: "40px" }}
          id="len"
          min={"8"}
          max={"50"}
          placeholder="8"
          onChange={(e) => {
            SetLength(parseInt(e.target.value));
          }}
        />
        <label htmlFor="len">Select Password length(**8-50 characters**)</label>
      </div>

      <button style={{ color: "white", margin: "50px 0" }} onClick={genPass}>
        Generate Password
      </button>
    </div>
  );
}

export default App;
