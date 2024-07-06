import React from "react";
import { useContext } from "react";
import { DiceContext } from "./helpers/context.jsx";
import { diceResultText } from "./helpers/dice.jsx";

export default function MainDiceBox() {
  const diceContext = useContext(DiceContext);
  return (
    <div className="main-dice-box">
      <h2>Dice Box</h2>
      <div className="dice-result">
        Dice Rolled:
        <div>
          {diceResultText(diceContext['THROW_RESULT'])}
        </div>
      </div>
    </div>
  );
}
