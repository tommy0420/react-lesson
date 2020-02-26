import React, { useState } from 'react'
import Form from "./Form"
import List from "./List"

const App = () => {
  console.log('App!!!')
  const [todos, setTodos] = useState([
    {
      note: 'アイウエオ',
      id: 0,
      isDone: false,
    },
    {
      note: '勉強',
      id: 1,
      isDone: false,
    }
  ])
  const [newNote, setNewNote] = useState('')
  return (
    <div>
      <Form
        setTodos={setTodos}
        todos={todos}
        newNote={newNote}
        setNewNote={setNewNote}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}
export default App