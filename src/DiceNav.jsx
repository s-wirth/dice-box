import React, { Component } from 'react'

export default class DiceNav extends Component {
    rollDice = e => {
        e.preventDefault();
        alert('hello')
    }

    render() {
        return (
            <div className='nav nav-roller'>
                <h3>Dice Select</h3>
                <div className="dice-btn-container">
                    <button onClick={this.rollDice}>roll</button>
                </div>
                <div className="dice-text-container">Dice Text Container</div>
            </div>
        )
    }
}
