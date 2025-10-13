import React, { FC } from 'react'
import { Cell } from '../modules/Cell'

interface CellProps {
  cell: Cell
}

const CellComponent: FC<CellProps> = ({ cell: Cell }) => {
  return <div className={["cell", Cell.colour].join(' ')}></div>
}

export default CellComponent
