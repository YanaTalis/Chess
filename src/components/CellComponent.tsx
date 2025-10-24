import React, { FC } from 'react'
import { Cell } from '../modules/Cell'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={['cell', cell.colour, selected ? 'selected' : ''].join(' ')}
      onClick={() => click(cell)}
      style={{ background: cell.avaliable && cell.figure ? 'blueviolet' : '' }}
    >
      {cell.avaliable && !cell.figure && <div className="avaliable" />}

      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  )
}

export default CellComponent
