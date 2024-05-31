import React from 'react'
import LogNav from './LogNav'
import DiceNav from './DiceNav'
import MainDiceBox from './MainDiceBox'


export default function App() {
    return (
        <div className='app'>
            <DiceNav />
            <MainDiceBox />
            <LogNav />
        </div>
    )
}
