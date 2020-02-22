import React from 'react'

const Item = ({ text, isDone, toggleIsDone, id }) => {
  const isDoneText = isDone ? "戻す" : "完了" // 三項演算子
  
  return (
    <li>
      <span
          style={{textDecoration: isDone ? "line-through" : "none"}}
      >
      {text}
      </span>
      <button
        type="button"
        onClick={() => toggleIsDone(id)}
      >
        {isDoneText}
      </button>
    </li>
  )
}

export default Item