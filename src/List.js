import React from 'react'
import Item from './Item'

const List = ({ todos }) => {
  const row = todos.map(todo => <Item aiueo={todo} />)

  // console.log(row)

  return (
    <ul>
      {row}
    </ul>
  )
}

export default List