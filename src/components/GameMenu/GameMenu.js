import React from "react";
import "./GameMenu.css";

function GameMenu(props) {
  return (
    <div id="menu">
      <h2>Generation</h2>
      <p>{props.generations}</p>
      <button onClick={props.toggle}>
        {!props.running ? "Start" : "Stop"}
      </button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.clear}>Clear</button>
    </div>
  );
}

export default GameMenu;
