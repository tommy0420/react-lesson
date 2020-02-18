import React, { useState } from 'react'

const Item = ({ aiueo }) => {
  const [isDone, setIsDone] = useState(false)
  let isDoneText = isDone ? "戻す" : "完了"
  const toggleIsDone = () => {
    setIsDone(!isDone)
  }
  return (
    <li>
      {aiueo.text}
      <button
        type="button"
        onClick={toggleIsDone}
      >
        {isDoneText}
      </button>
    </li>
  )
}

export default Item