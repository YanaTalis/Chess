import React, { FC, useState, useRef, useEffect } from 'react'
import { Player } from '../modules/Player'
import { Colours } from '../modules/Colours'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300)
  const [blackTime, setBlackTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const cb =
      currentPlayer?.colour === Colours.WHITE
        ? decreaseWhiteTimer
        : decreaseBlackTimer

    timer.current = setInterval(cb, 1000)
  }

  function decreaseWhiteTimer() {
    setWhiteTime((prev) => prev - 1)
  }

  function decreaseBlackTimer() {
    setBlackTime((prev) => prev - 1)
  }

  function handleRestart() {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
    <div className="timer">
      <button onClick={handleRestart}>NEW GAME</button>
      <h2> WHITE : {whiteTime}</h2>
      <h2> BLACK : {blackTime} </h2>
    </div>
  )
}

export default Timer
