import React, { useState } from 'react'

const Form = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // todosに新しいtodoを追加する処理
    // ロジックを気にしないで済むようにしたい...
    addTodo(value) // valueは今の入力値

    setValue("")
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
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