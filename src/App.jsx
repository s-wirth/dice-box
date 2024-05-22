import React from 'react'
import DiceBox from './MainDiceBox'
import RollerNav from './RollerNav'
import LogNav from './LogNav'

const App = () => {
  return (
    <div className='app'>
        <RollerNav  />
        <DiceBox/>
        <LogNav  />
    </div>
  )
}

export default App
