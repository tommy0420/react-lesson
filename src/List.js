import React from 'react'
import Item from './Item'

const List = ({ todos, toggleIsDone }) => {
  const row = todos.map((todo, index) => (
    <Item 
      text={todo.text}
      isDone={todo.isDone}
      toggleIsDone={toggleIsDone}
      key={index}
      id={index}
    />
  )
)

  // console.log(row)

  return (
    <ul>
      {row}
    </ul>
  )
}

export default List