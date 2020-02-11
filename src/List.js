import React from 'react'

const List = ({ user }) => {
  return (
    <ul>
      <li>{user[1]}</li>
      <li>{user[2]}</li>
    </ul>
  )
}


export default List