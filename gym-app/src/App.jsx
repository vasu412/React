import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [sec, setSec] = useState("00");
  const [timer, setTimer] = useState(false);

  const startTimer = () => {
    const interval = setInterval(() => {
      setSec((prev) => prev - 1);
      if (sec == 0 && mins > 0) {
        setSec(60);
        mins((prev) => prev - 1);
      }
      if (sec == 0 && mins == 0 && hours > 0) {
        setSec(60);
        setMins(60);
        setHours((prev) => prev - 1);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const h = e.target[0].value;
    const m = e.target[1].value;
    const s = e.target[2].value;
    s != "" && setSec(s);
    console.log(s);
    h != "" && setHours(e.target[0].value);
    m != "" && setMins(e.target[1].value);
    startTimer();
    setTimer(true);
  };
  return (
    <>
      <h1>Countdown Timer</h1>
      {!timer ? (
        <div>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="number"
              className="input"
              min={1}
              max={12}
              placeholder="HH"
            />
            <input
              type="number"
              className="input"
              min={1}
              max={60}
              placeholder="MM"
            />
            <input
              type="number"
              className="input"
              min={1}
              max={60}
              placeholder="SS"
            />
            <div>
              <button type="submit">Start</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="timer">
          <h1>
            {hours < 10 ? "0" + hours : hours}:{mins < 10 ? "0" + mins : mins}:
            {sec < 10 ? "0" + sec : sec}
          </h1>
        </div>
      )}
    </>
  );
};

export default App;
