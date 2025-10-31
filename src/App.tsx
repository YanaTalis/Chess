import React, { useState, useEffect } from 'react'
import './App.css'
import { Board } from './modules/Board'
import BoardComponent from './components/BoardComponent'
import { Player } from './modules/Player'
import { Colours } from './modules/Colours'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colours.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colours.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function switchPlayer() {
    setCurrentPlayer(
      currentPlayer?.colour === Colours.WHITE ? blackPlayer : whitePlayer
    )
  }

  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        switchPlayer={switchPlayer}
      />
      <div>
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
      </div>
    </div>
  )
}

export default App
