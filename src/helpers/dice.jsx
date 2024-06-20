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
      diceContext[key]["amount"] = 0;
    }
  });
  setDiceContext(diceContext);
  return;
}

export function diceResultText(throwResult) {
  let inf = [];
  Object.entries(DICE_KEYS).map(([key, v]) => {
    console.log("key", key);
    console.log("v", v);
    console.log("throwResult", throwResult);
    let sum = 0;
    if (throwResult[key]) {
      console.log(throwResult);
      throwResult[key].forEach(() => {
        sum = throwResult[key].reduce((a, b) => a + b, 0);
      });
      if (sum > 0) {
        inf.push(
          <p key={key}>
            {key} | {throwResult[key].join(", ")} | SUM: {sum}
          </p>
        );
      }
    }
  });
  return inf;
}
