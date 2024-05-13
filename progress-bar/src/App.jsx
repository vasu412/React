import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const [name, setName] = useState("Loading....");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 100) {
          clearInterval(interval);
          setName("Complete!");
        }
        return newCount;
      });
    }, 200);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <>
      <h1>Progress Bar</h1>
      <div className="bar" style={{ "--count": `${count}%` }}>
        <p>{count}%</p>
      </div>
      <p style={{ margin: "10px 0" }}>{name}</p>
    </>
  );
}

export default App;
