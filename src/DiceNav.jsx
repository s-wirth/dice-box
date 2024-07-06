import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { rollDice, diceInRoll } from "./helpers/dice.jsx";
import DiceSelectorBtn from "./sub_comps/DiceSelectorBtn.jsx";
import { DiceContext } from "./helpers/context.jsx";
import { DICE_KEYS, THROW_RESULT, DICE_CONTEXT } from "./helpers/constants.jsx";

export default function DiceNav({ setDiceContext }) {
  const [diceAmount, setDiceAmount] = useState(0);
  const diceContext = { ...DICE_CONTEXT };

  return (
    <div className="nav nav-roller">
      <h3>Dice Select</h3>
      <span>{diceInRoll({ diceContext, setDiceContext })}</span>
      <button
        onClick={() => {
          rollDice({ diceContext, setDiceContext });
        }}
      >
        roll
      </button>
      <DiceSelectorBtn diceContext={diceContext} setDiceContext={setDiceContext} />
      
      {/* <div className="dice-text-container">Dice Text Container</div> */}
    </div>
  );
}
