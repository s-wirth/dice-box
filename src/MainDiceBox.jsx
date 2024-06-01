import React from 'react'
import { useContext } from 'react';
import { DiceThrowContext } from "./helpers/context.jsx";

export default function MainDiceBox() {
  const diceThrowContext = useContext(DiceThrowContext)
  console.log('diceThrowContext', diceThrowContext)
  return (
  <div className="main-dice-box">
    <h2>Dice Box</h2>
    <div className="dice-result">Dice Rolled: {String(diceThrowContext)}</div>
  </div>
  )
}
