export function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function rollDSix(diceToRoll) {
    let results = [];
    console.log('diceToRoll',diceToRoll)
    let str = '';

    for (let i = 0; i < diceToRoll; i++) {
        str = str + i;
        console.log(str)
      }

    for (let diceRolled = 0; diceRolled < diceToRoll; diceRolled++) {
        console.log('sd')
        results.push(getRandomInt(1,6))
    };

    console.log(results)
    return results;
}