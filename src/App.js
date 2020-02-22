import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: '風呂洗う',
    },
    {
      text: '勉強する',
    },
  ])

  return (
    <div>
      <Form
        setTodos={setTodos}
        todos={todos}
      />
      <List
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App