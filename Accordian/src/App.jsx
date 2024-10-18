import { useState } from "react";
import "./App.css";
import Accordian from "./accordian";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1
      // onClick={(e) => {
      //   setOpen(!open);
      // }}
      >
        Open all
      </h1>
      <div>
        <Accordian idx={1} open={open} />
        <Accordian idx={2} open={open} />
        <Accordian idx={3} open={open} />
        <Accordian idx={4} open={open} />
        <Accordian idx={5} open={open} />
      </div>
    </>
  );
}

export default App;
