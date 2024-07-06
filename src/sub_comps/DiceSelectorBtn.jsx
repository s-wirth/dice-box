import React from "react";
import { DICE_KEYS, THROW_RESULT } from "../helpers/constants.jsx";

export default function DiceSelectorBtn({diceContext, setDiceContext}) {
  let btns = []
  Object.entries(DICE_KEYS).map(([key, v]) => {
    btns.push(
      <div className="dice-btn-container" key={key}>
        <p>{key}</p>
        <input
          type="number"
          min='0'
          value={(diceContext[key] ? diceContext[key]['amount'] : 0)}
          onChange={(e) => {
            diceContext[key]['amount'] = Number(e.target.value);
            setDiceContext({ ...diceContext });
          }}
        />
      </div>
    )
  });
  return btns;
}
