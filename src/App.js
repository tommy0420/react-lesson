import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const App = () => {
  const [todos, setTodos] = useState([
    '風呂洗う',
    '勉強する',
  ])
  return (
    <div>
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} />
    </div>
  )
}

export default App