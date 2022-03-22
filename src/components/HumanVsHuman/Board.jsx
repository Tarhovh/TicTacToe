import React, { useState } from "react";

import Square from "../Square";

function Board({ players }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);
  const [user, setUser] = useState("");

  const notFilledSquares = squares
    .map((square) => (square === null ? square : "X"))
    .filter((val) => val === null);

  function handleBtnclick(i) {
    if (isX && squares[i] !== "O") {
      squares[i] = "X";
      setUser(players[0].name);
    } else if (!isX && squares[i] !== "X") {
      squares[i] = "O";
      setUser(players[1].name);
    }
    setSquares(squares);
    setIsX(!isX);
  }

  function winner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return `Winner: ${user} 
      ( ${squares[a]} )`;
      } else if (
        !notFilledSquares.length &&
        squares[a] !== squares[b] &&
        squares[b] !== squares[c]
      ) {
        return `Draw`;
      }
    }
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setIsX(true);
  }

  function squareRendering(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (!winner(squares || squares[i] === "null")) {
            handleBtnclick(i);
          }
        }}
      />
    );
  }

  return (
    <>
      <h1>{winner(squares)}</h1>

      <div className="board">
        <div className="boardRow">
          {squareRendering(0)}
          {squareRendering(1)}
          {squareRendering(2)}
        </div>

        <div className="boardRow">
          {squareRendering(3)}
          {squareRendering(4)}
          {squareRendering(5)}
        </div>

        <div className="boardRow">
          {squareRendering(6)}
          {squareRendering(7)}
          {squareRendering(8)}
        </div>
      </div>
      <button className="resetBtn" onClick={restart}>
        Restart
      </button>
    </>
  );
}

export default Board;
