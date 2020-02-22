import React, { useState } from 'react'
import Form from './Form'
import List from './List'

import './main.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: '風呂洗う',
      isDone: false
    },
    {
      text: '勉強する',
      isDone: true
    },
  ])

  const addTodo = (text) => {
    const newTodos = [
      ...todos, // スプレッド演算子
      {
        isDone: false,
        text // ↓と同義
        // text: text
      }
    ]
    setTodos(newTodos)
  }

  const toggleIsDone = id => {
    const newTodos = todos.slice()
    newTodos[id].isDone = !newTodos[id].isDone 
    setTodos(newTodos)
  }

  return (
    <div>
      <Form
        addTodo={addTodo}
      />
      <List
        todos={todos}
        toggleIsDone={toggleIsDone}
      />
    </div>
  )
}

export default App