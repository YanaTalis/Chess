import { Colours } from './Colours'
import { Figure } from './Figure'
import { Board } from './Board'

export class Cell {
  readonly x: number
  readonly y: number
  readonly colour: Colours
  figure: Figure | null
  board: Board
  avaliable: boolean
  id: number

  constructor(
    board: Board,
    x: number,
    y: number,
    colour: Colours,
    figure: Figure | null
  ) {
    this.x = x
    this.y = y
    this.colour = colour
    this.figure = figure
    this.board = board
    this.avaliable = false
    this.id = Math.random()
  }
}
