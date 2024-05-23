import React, { Component } from 'react'

export default class DiceNav extends Component {
    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    rollDSix(n) {
        return this.getRandomInt(1,6)
    }

    rollDice = e => {
        e.preventDefault();
        alert(this.rollDSix())
    }

    render() {
        return (
            <div className='nav nav-roller'>
                <h3>Dice Select</h3>
                <div className="dice-btn-container">
                    <button onClick={this.rollDice  }>roll</button>
                </div>
                <div className="dice-text-container">Dice Text Container</div>
            </div>
        )
    }
}
