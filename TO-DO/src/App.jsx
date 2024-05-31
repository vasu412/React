import { useReducer } from "react";
import "./App.css";

function App() {
  const todos = [];

  function reducer(state, action) {
    return action.type === "addObj"
      ? [...state, action.value]
      : action.type === "del"
      ? state.filter((x, idx) => idx !== action.value)
      : action.type === "search"
      ? state.filter((x) => x.includes(action.value))
      : state;
  }

  const [state, dispatch] = useReducer(reducer, todos);

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

      {state.map((x, idx) => {
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
                style={{ marginRight: "10px" }}
                onClick={() => {
                  dispatch({ type: "del", value: idx });
                }}>
                🗑️
              </span>
              <span
                onClick={(e) => {
                  e.target.style.textDecoration = "line-through";
                }}>
                ✅
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
