import React from "react"

const Form = ({ setTodos, todos, newNote, setNewNote }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos(todos.concat({
      note: newNote,
      id: todos.length
    }))
  }
  const handleChange = (e) => {
    console.log(e.target.value)
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
      <button type="submit">追加</button>
    </form>
  )
}

export default Form