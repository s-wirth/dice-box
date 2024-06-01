import React from "react";
import { useContext } from 'react';
import { useState } from "react";
import { rollDice } from "./helpers/dice.jsx";
import { DiceThrowContext } from "./helpers/context.jsx";
import { DICE_KEYS, THROW_RESULT } from "./helpers/constants.jsx";


export default function DiceNav({setResults}) {
  const [diceAmount, setDiceAmount] = useState(0)
  const { diceThrowContext, setDiceThrowContext } = useContext(DiceThrowContext);


  return (
    <div className="nav nav-roller">
      <h3>Dice Select</h3>
      <div className="dice-btn-container">
        <p>D6</p>
        {/* number value is string */}
        <input
          type="number"
          value={diceAmount.d6}
          onChange={(e) => setDiceAmount(Number(e.target.value))}
        />
        <button onClick={() => setResults(rollDice(6, diceAmount))}>roll</button>
      </div>
      <div className="dice-text-container">Dice Text Container</div>
    </div>
  );
}
