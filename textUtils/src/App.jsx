import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [text, setText] = useState("");

  function counting(text) {
    let count = 1;
    for (let i = 1; i < text.length; i++) {
      if (text[i - 1] === " " && text[i] !== " ") count++;
    }
    setWordCount(count);
    setCharCount(text.length);
    setReadTime(text.length / 200);
    setText(text);
  }
  function upCase() {
    let prevTex = text;
    setText(prevTex.toUpperCase());
  }
  function lCase() {
    let prevTex = text;
    setText(prevTex.toLowerCase());
  }
  function clearText() {
    setText("");
    setWordCount(0);
    setCharCount(0);
    setReadTime(0);
  }

  function removeSpaces() {
    let prevTex = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " || (text[i] === " " && text[i - 1] !== " "))
        prevTex += text[i];
    }
    setText(prevTex);
  }

  function copy() {
    navigator.clipboard.writeText(text);
    alert("Your text has been copied to CLIPBOARD!!!");
  }

  return (
    <>
      <h1>TextUtis - Word Counter, Character Counter, Remove Extra Spaces</h1>
      <form
        action="#"
        onSubmit={(e) => {
          e.target[0].value = text;
        }}>
        <div className="text">
          <label htmlFor="text">Enter Your Text Here:</label>
          <textarea
            name=""
            id="text"
            cols="30"
            rows="10"
            onKeyUp={(e) => {
              counting(e.target.value);
            }}></textarea>
        </div>
        <button onClick={upCase}>Convert Uppercase</button>
        <button onClick={lCase}>Convert Lowercase</button>
        <button onClick={clearText}>Clear Text</button>
        <button onClick={copy}>Copy To Clipboard</button>
        <button onClick={removeSpaces}>Remove Extra Spaces</button>
      </form>

      <div>
        <h1>Summary of Your Text</h1>
        <p>Number of words :{wordCount} </p>
        <p>Number of characters : {charCount}</p>
        <p>Reading Time : {readTime}</p>
      </div>
    </>
  );
}

export default App;
