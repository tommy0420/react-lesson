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

  const addTodo = (text) => {
    // setTodos(todos.concat({
    //   text: newNote,
    //   isDone: false,
    // }))

    const newTodos = [
      ...todos, // スプレッド演算子
      {
        text // ↓と同義
        // text: text
      }
    ]
    setTodos(newTodos)
  }

  return (
    <div>
      <Form
        addTodo={addTodo}
      />
      <List
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App