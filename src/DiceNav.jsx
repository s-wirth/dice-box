import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { rollDice } from "./helpers/dice.jsx";
import DiceSelectorBtn from "./sub_comps/DiceSelectorBtn.jsx";
import { DiceContext } from "./helpers/context.jsx";
import { DICE_KEYS, THROW_RESULT, DICE_CONTEXT } from "./helpers/constants.jsx";

export default function DiceNav({ setDiceContext }) {
  const [diceAmount, setDiceAmount] = useState(0);
  const diceContext = { ...DICE_CONTEXT };
  console.log("diceContext nav tip top", diceContext);

  return (
    <div className="nav nav-roller">
      <h3>Dice Select</h3>
      <DiceSelectorBtn diceContext setDiceContext />
      <button
        onClick={() => {
          console.log("diceContext nav beg ", diceContext);
          rollDice({ diceContext, setDiceContext });
          console.log("diceContext nav end", diceContext);
        }}
      >
        roll
      </button>
      <div className="dice-text-container">Dice Text Container</div>
    </div>
  );
}
