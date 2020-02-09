import React, { useState } from 'react'
import Player from './Player'

const App = ({ players }) => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <Player playerProf={players[0]} />
      <Player playerProf={players[1]} />
    </>
  )
}

export default App