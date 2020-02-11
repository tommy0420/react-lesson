import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const users = {
  iskw: ['石川', '100', 'ベイブレード'],
  mykw: ['宮川', '120387', '縄跳び']
}

ReactDOM.render(
  <App users={users} />,
  document.getElementById('root')
)
