import { useState } from "react";

const Note = ({ text, val }) => {
  let [num, SetNum] = useState(val);

  const add = () => {
    SetNum(++num);
  };
  const del = () => {
    SetNum(--num);
  };
  return (
    <div className="note">
      <span>{text} -</span>
      <span>{num} HOURS</span>
      <button onClick={add}>+</button>
      <button onClick={del}>-</button>
    </div>
  );
};

export default Note;
