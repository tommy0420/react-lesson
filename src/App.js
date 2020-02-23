import React, { useState } from 'react'
import Form from "./Form"
import List from "./List"

const App = () => {
  const [todos, setTodos] = useState([
    {
      note: 'アイウエオ',
      id: 0,
    },
    {
      note: '勉強',
      id: 1,
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