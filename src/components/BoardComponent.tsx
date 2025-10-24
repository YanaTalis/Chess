import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modules/Board'
import { Cell } from '../modules/Cell'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell) ) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
      updateBoard()
    } else {
      setSelectedCell(cell)
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
  )
}

export default BoardComponent
