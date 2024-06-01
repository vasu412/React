import { useState } from "react";

const Content = ({ x, idx, dispatch }) => {
  const [display, setDisplay] = useState("none");

  return (
    <div
      key={x}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <p>{x}</p>
      <div>
        <span
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: "del", value: idx });
          }}>
          🗑️
        </span>
        <span
          onClick={() => {
            display === "none" ? setDisplay("block") : setDisplay("none");
          }}>
          ✏️
        </span>
        <form
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "edit",
              value: e.target[0].value,
              index: idx,
            });
            e.target[0].value = "";
            setDisplay("none");
          }}>
          <input type="text" placeholder="type here..." style={{ display }} />
          <button type="sumbit" style={{ display: "none" }}></button>
        </form>
      </div>
    </div>
  );
};

export default Content;
