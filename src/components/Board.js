import React from "react";
import Square from "./Square";
export default function Board(props) {
  return (
    <div className="board-grid">
      {props.squares.map((square, index) => (
        <Square
          value={square}
          onClick={() => {
            props.onClick(index);
          }}
        />
      ))}
      {/* <Square
          value={props.squares[0]}
          onClick={() => {
            props.onClick(0);
          }}
        /> */}
    </div>
  );
}
