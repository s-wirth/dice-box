export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function rollDSix(diceToRoll) {
  let results = [];
  console.log("diceToRoll", diceToRoll);

  for (let diceRolled = 0; diceRolled < diceToRoll; diceRolled++) {
    results.push(getRandomInt(1, 6));
  }

  console.log(results);
  return results;
}
