import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HumanVsCPU from "./HumanVsCPU";
import reportWebVitals from "./reportWebVitals";
import HumanVsHuman from "./HumanVsHuman";

function renderHumanVsPC() {
  ReactDOM.render(
    <React.StrictMode>
      <HumanVsCPU />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

function renderHumanVsHuman() {
  ReactDOM.render(
    <React.StrictMode>
      <HumanVsHuman />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

function App() {
  return (
    <>
     <h1>Tic Tac Toe</h1>
    <div className="main">
      <button onClick={renderHumanVsPC}>Human VS CPU</button>
      <button onClick={renderHumanVsHuman}>Human VS Human</button>
    </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
