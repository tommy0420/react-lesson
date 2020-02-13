import React, { useState } from 'react'

const User = ({ user }) => {
  console.log(user)
  // const { name, tokugi } = props

  // const name = props.name
  // const tokugi = props.tokugi

  // 分割代入
  const [score, setScore] = useState(0)

  const handleClick = () => {
    setScore(score + 1)
  }

  return (
    <>
      <div>
        <h1>名前：{user.name}</h1>
        <p>特技：{user.tokugi}</p>
        <p>Score：{score}</p>
        <button
          type="button"
          onClick={handleClick}
        >
          加算
        </button>
      </div>
    </>
  )
}

export default User