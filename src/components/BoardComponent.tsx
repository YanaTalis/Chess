import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modules/Board'
import { Cell } from '../modules/Cell'
import CellComponent from './CellComponent'
import { Player } from '../modules/Player'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  switchPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  switchPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
      switchPlayer()
      updateBoard()
    } else {
      if (cell.figure?.colour === currentPlayer?.colour) {
        setSelectedCell(cell)
      }
    }
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  return (
    <div>
    <h2 className='current'>Current player {currentPlayer?.colour}</h2>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                click={click}
                cell={cell}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
                key={cell.id}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default BoardComponent
