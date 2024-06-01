import React from "react";
import { useState } from "react";
import { rollDice } from "./helpers/dice.jsx";
import { DiceSelectorBtn } from "./sub_comps/DiceSelectorBtn.jsx";

export default function DiceNav({diceResults,setResults}) {

  // const rollDice = (e) => {
  //   e.preventDefault();
  //   let results = [];
  //   results = rollDSix(diceAmount.d6);
  //   setResults({d6: results})
  // };

  const  onClick = (e) => {
    rollDice
  }

  const rows = [];
  for (const [key, value] of Object.entries(diceResults)) {
    rows.push(<DiceSelectorBtn key dTitle={value.title} maxVal={value.maxVal} diceToRoll={value.diceToRoll} setResults />);
  }


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
          onChange={(e) => setResults({...diceResults, })}
        />
        <button onClick={rollDice}>roll</button>
      </div>
      <div className="dice-text-container">Dice Text Container</div>
    </div>
  );
}
