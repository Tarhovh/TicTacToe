import React, { useEffect, useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isO, setIsO] = useState(false);

  function handleBtnclick(i) {
    if (isO && squares[i] !== "X") {
      squares[i] = "O";
    }
    else if (!isO && squares[i] !== 'O') {
      squares[i] = "X"
    }
    setSquares(squares);
    setIsO(!isO)
  }

  function restart() {
    setIsO(true);
    setSquares(Array(9).fill(null));
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
        return `the winner is ${squares[a]}`;
      }

      else if (
        squares[0] &&
        squares[1] &&
        squares[2] &&
        squares[3] &&
        squares[4] &&
        squares[5] &&
        squares[6] &&
        squares[7] &&
        squares[8] &&

        squares[a] !== squares[b] &&
        squares[b] !== squares[c]
      ) {
        return `Draw`
      }
    }

  }


  function squareRendering(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (!winner(squares || squares[i] === 'null')) {
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
        <button onClick={restart}>Restart</button>
      </div>
    </>
  );
}

export default Board;
