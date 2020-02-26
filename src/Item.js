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
  let isDoneText = todo.isDone ? '戻す' : '完了'
  const toggleIsDone = () => {
    const newTodos = todos.slice()
    const changedIsDoneTodo = newTodos.find(x => x.id === todo.id)
    changedIsDoneTodo.isDone = !changedIsDoneTodo.isDone
    // console.log("newTodos", newTodos)
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
        <button
          type="button"
          onClick={toggleIsDone}
        >
          {isDoneText}
        </button>
      </li>
    </>
  )
}

export default Item