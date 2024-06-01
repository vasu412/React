import { useReducer, useState } from "react";
import "./App.css";
import Content from "./content";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "del":
        const remainingVal = state.todos.filter(
          (x, idx) => idx !== action.value
        );
        return {
          todos: remainingVal,
          filtered: remainingVal,
        };
      case "addObj":
        const addedVal = [...state.todos, action.value];
        return {
          todos: addedVal,
          filtered: addedVal,
        };

      case "search":
        if (action.value === "") {
          return {
            ...state,
            filtered: state.todos,
          };
        }
        const filteredData = state.todos.filter((x) =>
          x.toLowerCase().includes(action.value)
        );

        return {
          ...state,
          filtered: filteredData,
        };

      case "edit":
        const editData = state.todos.map((x, idx) => {
          if (idx === action.index) x = action.value;
          return x;
        });
        return {
          todos: editData,
          filtered: editData,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { todos: [], filtered: [] });

  function handleSearch(e) {
    dispatch({ type: "search", value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "addObj", value: e.target[0].value });
    e.target[0].value = "";
  }

  return (
    <>
      <h1>TO-DO List</h1>
      <form
        action=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          style={{ marginRight: "15px", height: "35px", width: "250px" }}
        />
        <button type="submit">ADD</button>
      </form>

      <form
        action=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "20px",
        }}>
        <input
          type="text"
          style={{
            marginRight: "15px",
            height: "35px",
            width: "250px",
            paddingLeft: "20px",
          }}
          placeholder="SEARCH TO-DOss..."
          onKeyUp={(e) => handleSearch(e)}
        />
        {/* <button>Search</button> */}
      </form>

      {state.filtered.map((x, idx) => {
        return <Content x={x} idx={idx} dispatch={dispatch} key={idx} />;
      })}
    </>
  );
}

export default App;
