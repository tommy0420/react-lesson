import React, { useState } from 'react'

const User = () => {
  // 分割代入
  const [score, setScore] = useState(0)
  // const score = 0
  // const setScore = scoreを更新するための関数

  // let score = 0
  const handleClick = () => {
    // score++
    setScore(score + 1)
  }
  return (
    <>
      <div>
        <h1>名前：石川</h1>
        <p>特技：お昼寝</p>
        <p>Score：{score}</p>
        <button
          type="button"
          onClick={handleClick}
        >
          加算
        </button>
      </div>
      <div>
        <h1>名前：相馬</h1>
        <p>特技：ない</p>
        <p>Score：０</p>
        <button type="button">加算</button>
      </div>
    </>
  )
}

export default User