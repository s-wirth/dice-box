import { DICE_KEYS, THROW_RESULT } from "./constants.jsx";

export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function rollDice({ diceContext, setDiceContext }) {
  let throwResult = { ...THROW_RESULT };
  let diceToRoll = 0;
  let maxVal = 0;
  Object.entries(DICE_KEYS).map(([key, v]) => {
    diceToRoll = diceContext[key]["amount"];
    maxVal = diceContext[key]["maxVal"];
    if (diceToRoll > 0) {
      let results = [];
      for (let diceRolled = 0; diceRolled < diceToRoll; diceRolled++) {
        results.push(getRandomInt(1, maxVal));
      }
      diceContext["THROW_RESULT"][key] = results;
    }
  });
  setDiceContext(diceContext);
  return;
}

export function diceResultText(tr) {
  let inf = [];
  Object.entries(DICE_KEYS).map(([key, v]) => {
    if (tr[key]) {
      tr[key].forEach(() => {
        let sum = tr[key].reduce((a, b) => a + b, 0);
        inf.push(
          <p key={key}>
            {key} | {tr[key]}, SUM: {sum}
          </p>
        );
      });
    }
  });
  return inf;
}
