import React from "react"
import Item from "./Item"

// mapメソッドを用いてItemを回す
// mapメソッド→配列の要素全てに同じ処理をするもの

const List = ({ todos }) => {

  const row = todos.map(x => <Item todo={x} />)
  console.log(row)
  return (
    <ul>
      {row}
    </ul>
  )
}

export default List