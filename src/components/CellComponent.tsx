import React, { FC } from 'react'
import { Cell } from '../modules/Cell'

interface CellProps {
  cell: Cell
}

const CellComponent: FC<CellProps> = ({ cell: Cell }) => {
  return <div className={["cell", Cell.colour].join(' ')}>
    {Cell.figure?.logo && < img src={Cell.figure.logo} alt=''/>}
  </div>
}

export default CellComponent
