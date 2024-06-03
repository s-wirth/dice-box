import React from "react";
import { useState } from "react";
import LogNav from "./LogNav";
import DiceNav from "./DiceNav";
import MainDiceBox from "./MainDiceBox";
import { THROW_RESULT,DICE_CONTEXT } from "./helpers/constants.jsx";
import { DiceContext } from "./helpers/context.jsx";

export default function App() {
  const [diceContext, setDiceContext] = useState({...DICE_CONTEXT})
  return (
    <DiceContext.Provider value={diceContext}>
      <div className="app">
        <DiceNav setDiceContext={setDiceContext} />
        <MainDiceBox />
        <LogNav />
      </div>
    </DiceContext.Provider>
  );
}
