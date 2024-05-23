import React from 'react'
import LogNav from './LogNav'
import DiceNav from './DiceNav'
import MainDiceBox from './MainDiceBox'

const App = () => {
  return (
    <div className='app'>
        <DiceNav  />
        <MainDiceBox/>
        <LogNav  />
    </div>
  )
}

export default App
