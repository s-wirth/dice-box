import React from "react";
// import {diceResultText} from './helpers/dice.jsx'

export default function MainDiceBox({ diceResults }) {
  const d6Rolled = diceResults.d6.length;
  let str = "";

  console.log("str", str);
  let dInfoStr = diceResults.d6.length + "d6";
  return (
    <div className="main-dice-box">
      <h2>Dice Box</h2>
      <div className="dice-result">Dice Rolled: {dInfoStr}</div>
      <p>Individual Results: 
        {diceResults.d6.map((m, i) => {
          return <span key={i}>{(i ? " || " : "") + m}</span>;
        })}
      </p>
      <div className="dice-result">Sum Result:  {diceResults.d6.reduce((a, b) => a + b, 0)}</div>
      {/* <div className="dice-table">{diceResultText(diceResults)}</div> */}
    </div>
  );
}

// Dice Rolled: 2d6 || Result: 8
