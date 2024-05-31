import React from "react";

export default function MainDiceBox({diceResults}) {
  return (
    <div className="main-dice-box">
      <h2>Dice Box</h2>
      <div className="dice-result">Dice Results: {diceResults}</div>
      <div className="dice-table">Dice Table</div>
      <div className="info-section">Information Section</div>
    </div>
  );
}
