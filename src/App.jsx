import React from "react";
import { useState } from "react";
import LogNav from "./LogNav";
import DiceNav from "./DiceNav";
import MainDiceBox from "./MainDiceBox";
import { THROW_RESULT } from "./helpers/constants.jsx";
import { DiceThrowContext } from "./helpers/context.jsx";

export default function App() {
  const [throwResult, setThrowResult] = useState({...THROW_RESULT})
  return (
    <DiceThrowContext.Provider value={throwResult}>
      <div className="app">
        <DiceNav setResults={setThrowResult} />
        <MainDiceBox />
        <LogNav />
      </div>
    </DiceThrowContext.Provider>
  );
}
