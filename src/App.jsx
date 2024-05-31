import React from "react";
import { useState } from "react";
import LogNav from "./LogNav";
import DiceNav from "./DiceNav";
import MainDiceBox from "./MainDiceBox";

export default function App() {
  const [diceResults, setDiceResults] = useState({ d6: [] });
  return (
    <div className="app">
      <DiceNav setResults={setDiceResults}/>
      <MainDiceBox diceResults={diceResults}/>
      <LogNav />
    </div>
  );
}
