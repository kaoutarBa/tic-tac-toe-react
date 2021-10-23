import React, { useReducer } from "react";
import Board from "./Board";

const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE":
      return {
        ...state,
        history: state.history.concat({ squares: action.payload.squares }),
        xIsNext: !state.xIsNext,
      };
  }
};

export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }],
  });
  const { xIsNext, history } = state;

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calulateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
  };

  const current = history[history.length - 1];
  const winner = calulateWinner(current.squares);
  const status = "Next player is X";
  const moves = (
    <li>
      <button>Start the Game</button>
    </li>
  );
  const squares = Array(9).fill(null);
  return (
    <div className={"game"}>
      <Board squares={squares} />

      <div className={"game-info"}>
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
