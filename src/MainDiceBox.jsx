import React, { Component } from 'react'

export default class MainDiceBox extends Component {
  render() {
    return (
      <div className='main-dice-box'>
        <h2>Dice Box</h2>
        <div className="dice-result">Dice Results</div>
        <div className="dice-table">Dice Table</div>
        <div className="info-section">Information Section</div>
      </div>
    )
  }
}