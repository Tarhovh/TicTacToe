import React, { useState } from "react";

import Board from "./Board";

function GameFormVsCPU() {
  const [player, setPlayer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setPlayer(e.target.changeName.value);
  }

  function reset() {
    setPlayer("");
  }

  return (
    <div className="container">
      <div className="mainBoard">
        <Board player={player} />
      </div>

      <div className="nameField">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="changeName" />
          </label>

          <input type="submit" value="Submit" />
        </form>

        <h1>Player: {player}</h1>
        <button className="resetNames" onClick={reset}>
          Reset Names
        </button>
      </div>
    </div>
  );
}

export default GameFormVsCPU;
