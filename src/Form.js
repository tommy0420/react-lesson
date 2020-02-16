import React from "react"

const Form = ({ setTodos, todos }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // const newTodos = todos.slice()
    // newTodos.push("石川")

    setTodos(todos.concat('石川'))
  }
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
    >
      <input type="text" />
      <button type="submit">追加</button>
    </form>
  )
}

export default Form