export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function rollDice(maxVal, diceToRoll) {
  let results = [];

  for (let diceRolled = 0; diceRolled < diceToRoll; diceRolled++) {
    results.push(getRandomInt(1, maxVal));
  }
console.log('results', results)
  return results;
}

// export function diceResultText(dArr) {
//   return [...Array(dArr.length).keys()].map((key) => (
//     <p key={key} >
//       {key}
//     </p>
//   ));
// }
