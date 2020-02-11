import React from 'react'
import List from './List'

const User = ({ user }) => {
  return (
    <>
      <h2>{user[0]}</h2>
      <List user={user} />
    </>
  )
}

export default User