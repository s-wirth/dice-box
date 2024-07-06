import { DICE_KEYS, THROW_RESULT } from "./constants.jsx";

export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  console.log('minCeiled', minCeiled)
  console.log('maxFloored', maxFloored)
  let res = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  console.log(res)
  return res
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
        console.log('maxVal', maxVal)
      }
      diceContext["THROW_RESULT"][key] = results;
      diceContext[key]["amount"] = 0;
    }
  });
  setDiceContext(diceContext);
  return;
}

export function diceInRoll({ diceContext, setDiceContext }) {
  let fullRollTxt = ''
  Object.entries(DICE_KEYS).map(([key, v]) => {
    let amount = diceContext[key]["amount"];
    let name = diceContext[key]["name"];
    if (amount > 0) {
      if (fullRollTxt) {
        fullRollTxt = fullRollTxt + '+' + amount.toString() + name
      } else {
        fullRollTxt = fullRollTxt + amount.toString() + name
      }
      
    }
  });
  diceContext['DICE_TXT'] = fullRollTxt
  return fullRollTxt
}

export function diceResultText(throwResult) {
  let inf = [];
  Object.entries(DICE_KEYS).map(([key, v]) => {
    let sum = 0;
    if (throwResult[key]) {
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
