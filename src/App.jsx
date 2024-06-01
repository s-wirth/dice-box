import React from "react";
import { useState } from "react";
import LogNav from "./LogNav";
import DiceNav from "./DiceNav";
import MainDiceBox from "./MainDiceBox";

  const DICE_DICT = {
    'D2': {title: 'd2', maxVal: 2, diceToRoll: 0, rollResult: []},
    'D4': {title: 'd4', maxVal: 4, diceToRoll: 0, rollResult: []},
    'D6': {title: 'd6', maxVal: 6, diceToRoll: 0, rollResult: []},
    'D8': {title: 'd8', maxVal: 8, diceToRoll: 0, rollResult: []},
    'D10': {title: 'd10', maxVal: 10, diceToRoll: 0, rollResult: []},
    'D12': {title: 'd12', maxVal: 12, diceToRoll: 0, rollResult: []},
    'D20': {title: 'd20', maxVal: 20, diceToRoll: 0, rollResult: []},
    'D100': {title: 'd100', maxVal: 100, diceToRoll: 0, rollResult: []},
  }
export default function App() {
  const [diceResults, setDiceResults] = useState(DICE_DICT);
  return (
    <div className="app">
      <DiceNav setResults={diceResults,setDiceResults} />
      <MainDiceBox diceResults={diceResults} />
      <LogNav />
    </div>
  );
}
