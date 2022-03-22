import React from "react";
import App from ".";
import GameFormVsHuman from "./components/HumanVsHuman/GameFormVsHuman";
import "./App.css";

function HumanVsHuman() {
  return (
    <div className="App">
      <App />
      <h2>Human VS Human</h2>
      <GameFormVsHuman />
    </div>
  );
}

export default HumanVsHuman;
