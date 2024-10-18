import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    red &&
      setTimeout(() => {
        setRed(false);
        setGreen(true);
        setYellow(false);
      }, 4000);

    green &&
      setTimeout(() => {
        setGreen(false);
        setYellow(true);
        setRed(false);
      }, 3000);

    yellow &&
      setTimeout(() => {
        setYellow(false);
        setRed(true);
        setGreen(false);
      }, 1000);
  }, [red, green, yellow]);

  return (
    <>
      <div
        style={{
          background: "black",
          height: "500px",
          width: "200px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <div
          style={{
            background: "red",
            height: "100px",
            width: "100px",
            borderRadius: "100%",
            border: red && "5px solid white",
          }}></div>
        <div
          style={{
            background: "yellow",
            height: "100px",
            width: "100px",
            borderRadius: "100%",
            border: yellow && "5px solid white",
          }}></div>
        <div
          style={{
            background: "green",
            height: "100px",
            width: "100px",
            borderRadius: "100%",
            border: green && "5px solid white",
          }}></div>
      </div>
    </>
  );
}

export default App;
