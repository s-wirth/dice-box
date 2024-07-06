import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { rollDice, diceRollToTxt } from "./helpers/dice.jsx";
import DiceSelectorBtn from "./sub_comps/DiceSelectorBtn.jsx";
import { DiceContext } from "./helpers/context.jsx";
import { DICE_KEYS, THROW_RESULT, DICE_CONTEXT } from "./helpers/constants.jsx";

export default function DiceNav({ setDiceContext }) {
  const [diceAmount, setDiceAmount] = useState(0);
  const diceContext = { ...DICE_CONTEXT };
  let fdt = diceRollToTxt( diceContext );

  return (
    <div className="nav nav-roller">
      <h3 className="nav-heading">Dice Select</h3>
      <div className="nav-roller-dic-txt">{fdt}</div>
      <button className="nav-roller-roll-btn"
        onClick={() => {
          rollDice({ diceContext, setDiceContext });
        }}
      >
        roll
      </button>
      <DiceSelectorBtn diceContext={diceContext} setDiceContext={setDiceContext} />
    </div>
  );
}
