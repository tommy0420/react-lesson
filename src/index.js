import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const users = [
  {
    name: "石川",
    tokugi: "昼寝",
  },
  {
    name: "相馬",
    tokugi: "バスケ",
  }
]

ReactDOM.render(
  <App users={users} />,
  document.getElementById('root')
)