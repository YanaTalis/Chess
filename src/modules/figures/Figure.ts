import { Colours } from '../Colours'
import logo from '../assets/black-king.png'
import { Cell } from '../Cell'

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  QUEEN = 'Queen',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  ROOK = 'Rook',
  BISHOP = 'Bishop',
}
export class Figure {
  colour: Colours
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number

  constructor(colour: Colours, cell: Cell) {
    this.colour = colour
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    return true
  }

  moveFigure(target: Cell) {}
}
