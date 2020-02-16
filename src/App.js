import React, { useState } from 'react'
import Form from "./Form"
import List from "./List"

const App = () => {
  const [todos, setTodos] = useState([
    'アイウエオ',
    '勉強する',
    'ご飯食べる',
    '追加したよ',
    'バリバリ',
  ])
  return (
    <div>
      <Form
        setTodos={setTodos}
        todos={todos}
      />
      <List todos={todos} />
    </div>
  )
}
export default App