import React from 'react'
import User from './User'

const App = ({ users }) => {
  return (
    <>
      <User
        user={users[0]}
      />
      <User
        user={users[1]}
      />
    </>
  )
}

export default App