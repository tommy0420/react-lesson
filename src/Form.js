import React, { useState } from 'react'

const Form = ({ setTodos, todos }) => {
  const [newNote, setNewNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos(todos.concat({
      text: newNote,
      isDone: false
    }))
    setNewNote("")
  }
  const handleChange = (e) => {
    console.log(newNote)
    setNewNote(e.target.value)
  }
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={newNote}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        追加
      </button>
    </form>
  )
}

export default Form