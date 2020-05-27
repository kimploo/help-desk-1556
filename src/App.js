import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    setCount(count + 1);
    console.log(count);
    console.log("work");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
        <button onClick={handleClick}>use this button</button>
      </header>
    </div>
  );
}

export default App;
