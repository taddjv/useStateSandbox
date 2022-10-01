import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={theme + " state"}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          if (theme === "light") {
            return setTheme("dark");
          } else {
            return setTheme("light");
          }
        }}
      >
        ChangeTheme
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
