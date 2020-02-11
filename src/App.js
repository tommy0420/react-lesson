import React from 'react'
import User from './User'

const App = ({ users }) => {
  return (
    <div>
      <h1>hello world</h1>
      <p>react始めます</p>
      <User user={users.iskw} />
      <User user={users.mykw} />
    </div>
  )
}

export default App