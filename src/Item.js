import React from "react"

const Item = ({ todo, todos, setTodos }) => {
  const handleDelete = () => {
    const newTodos = todos.slice()
    newTodos.splice(todo.id, 1)

    // idの振り直し
    newTodos.map(
      (todo, i) => {
        console.log(i)
        return (
          todo.id = i,
          todo.note = todo.note
        )
      }
    )


    setTodos(newTodos)
  }
  return (
    <>
      <li>
        <p>{todo.note}</p>
        <button
          type="text"
          onClick={handleDelete}
        >
          削除
        </button>
      </li>
    </>
  )
}

export default Item