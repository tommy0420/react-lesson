import React from "react"
import Item from "./Item"

// mapメソッドを用いてItemを回す
// mapメソッド→配列の要素全てに同じ処理をするもの

const List = ({ todos, setTodos }) => {

  const row = todos.map((x, i) => <Item todo={x} key={x.id} todos={todos} setTodos={setTodos} />)
  return (
    <ul>
      {row}
    </ul>
  )
}

export default List