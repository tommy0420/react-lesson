import React from 'react'

const Player = ({ playerProf }) => {
  // const [tktkScore, setTktkScore] = useState(0)
  // const [iskwScore, setIskwScore] = useState(0)
  return (
    <>
      <h1>{playerProf.name}：０</h1>
      <p>特技：{playerProf.skills}</p>
      <button
        type="button"
      // onClick={() => setTktkScore(tktkScore + 1)}
      >
        おせ！
      </button>
    </>
  )
}

export default Player