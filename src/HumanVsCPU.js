import React from "react";
import App from ".";
import GameFormVsCPU from "./components/HumanVsCPU/GameFormVsCPU";
import "./App.css";

function HumanVsCPU() {
  return (
    <div className="App">
      <App />
      <h2>Human VS CPU</h2>
      <GameFormVsCPU />
    </div>
  );
}

export default HumanVsCPU;
