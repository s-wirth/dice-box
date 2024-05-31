import React from 'react'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function rollDSix(n) {
    return getRandomInt(1,6)
}


export default function DiceNav() {
    const rollDice = (e) => {
        e.preventDefault();
        alert(rollDSix())
    }
    
  return (
    <div className='nav nav-roller'>
    <h3>Dice Select</h3>
    <div className="dice-btn-container">
        <button onClick={rollDice}>roll</button>
    </div>
    <div className="dice-text-container">Dice Text Container</div>
</div>
  )
}
