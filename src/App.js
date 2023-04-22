import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("Stop");
  const intervalFnRef = useRef(null);

  const handleStart = () => {
    setAction("Start");
    intervalFnRef.current = setInterval(() => {
      setCount((n) => n + 1);
    }, 1000);
    return () => clearInterval(intervalFnRef.current);
  };

  const handlePause = () => {
    setAction("Pause");
    clearInterval(intervalFnRef.current);
  };

  const handleReset = () => {
    setAction("Stop");
    clearInterval(intervalFnRef.current);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <h1>{count}</h1>
      </div>
      <br />
      {(action == "Stop" || action == "Pause") && (
        <button onClick={handleStart} className="buttonStyle">
          Start
        </button>
      )}
      {action == "Start" && (
        <button onClick={handlePause} className="buttonStyle">
          Pause
        </button>
      )}
      {(action == "Start" || count != 0) && (
        <button onClick={handleReset} className="buttonStyle">
          Reset
        </button>
      )}
    </div>
  );
}
