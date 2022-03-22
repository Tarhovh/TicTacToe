import React, { useState } from "react";
import Board from "./Board";

function GameFormVsHuman() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!player1) {
      setPlayer1(e.target.changeName.value);
    }

    if (player1 && !player2) {
      setPlayer2(e.target.changeName.value);
    }
  }

  function reset() {
    setPlayer1("");
    setPlayer2("");
  }

  return (
    <div className="container">
      <div className="mainBoard">
        <Board players={[{ name: player1 }, { name: player2 }]} />
      </div>

      <div className="nameField">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="changeName" />
          </label>

          <input type="submit" value="Submit" />
        </form>

        <h2>Player 1: {player1}</h2>
        <h2>Player 2: {player2}</h2>
        <button className="resetNames" onClick={reset}>
          Reset Names
        </button>
      </div>
    </div>
  );
}

export default GameFormVsHuman;
