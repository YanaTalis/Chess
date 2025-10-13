import { Cell } from './Cell'
import { Colours } from './Colours'
export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colours.BLACK, null))
        } else {
          row.push(new Cell(this, j, i, Colours.WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }
}
