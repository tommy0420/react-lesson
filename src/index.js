import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const players = [
  {
    name: '高塚',
    skills: 'バスケ'
  },
  {
    name: '石川',
    skills: '昼寝'
  }
]

ReactDOM.render(
  <App players={players} />,
  document.getElementById('root')
)


      // const count = 0
  // const setCount = () => {
  //   count変数を更新するための処理
  // }
  // ■stateの決まり
  // ・state(count変数)を直接再代入などによって変更・更新してはならない
  // count = count + 1
  // ■state更新用関数の使い方
  // setCount(count + 1)
