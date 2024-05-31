import React from "react";
import { useState } from "react";
import { rollDSix } from "./helpers/dice.js";

export default function DiceNav() {
  const [diceAmount, setDiceAmount] = useState({
    d6: 0,
  });
  const [rollResult, setRollResult] = useState({
    d6: [],
  });

  const rollDice = (e) => {
    e.preventDefault();
    let results = [];
    results = rollDSix(diceAmount.d6);
    setRollResult({
      d6: results,
    });
    alert(results);
  };

  return (
    <div className="nav nav-roller">
      <h3>Dice Select</h3>
      <div className="dice-btn-container">
        <p>D6</p>
        {/* number value is string */}
        <input
          type="number"
          value={diceAmount.d6}
          onChange={(e) => setDiceAmount({ d6: Number(e.target.value) })}
        />
        <button onClick={rollDice}>roll</button>
      </div>
      <div className="dice-text-container">Dice Text Container</div>
    </div>
  );
}
