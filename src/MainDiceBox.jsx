import React from "react";
import { useContext } from "react";
import { DiceContext } from "./helpers/context.jsx";
import { diceResultText } from "./helpers/dice.jsx";

export default function MainDiceBox() {
  const diceThrowContext = useContext(DiceContext);
  return (
    <div className="main-dice-box">
      <h2>Dice Box</h2>
      <div className="dice-result">
        Dice Rolled:
        <div>
          {console.log("diceThrowContext main bod", diceThrowContext)}
          {console.log("diceThrowContext['THROW_RESULT']", diceThrowContext['THROW_RESULT'])}
          {diceResultText(diceThrowContext['THROW_RESULT'])}
          {/* {Object.entries(diceThrowContext['THROW_RESULT']).map(([key, value]) => (
            <button key={key}>{value}</button>
          ))} */}
        </div>
        {/* {diceResultText(diceThrowContext)} */}
      </div>
    </div>
  );
}
