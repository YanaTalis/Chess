import { Cell } from './Cell'
import { Colours } from './Colours'
import { Queen } from './figures/Queen'
import { King } from './figures/King'
import { Rook } from './figures/Rook'
import { Bishop } from './figures/Bishop'
import { Knight } from './figures/Knight'
import { Pawn } from './figures/Pawn'

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push(new Cell(this, j, i, Colours.WHITE, null))
        } else {
          row.push(new Cell(this, j, i, Colours.BLACK, null))
        }
      }
      this.cells.push(row)
    }
  }

  getCopyBoard(): Board {
    const newBoard = new Board()
    newBoard.cells = this.cells
    return newBoard
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        target.avaliable = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  private addQueens() {
    new Queen(Colours.WHITE, this.getCell(3, 7))
    new Queen(Colours.BLACK, this.getCell(3, 0))
  }

  private addKings() {
    new King(Colours.WHITE, this.getCell(4, 7))
    new King(Colours.BLACK, this.getCell(4, 0))
  }

  private addRooks() {
    new Rook(Colours.WHITE, this.getCell(0, 7))
    new Rook(Colours.WHITE, this.getCell(7, 7))
    new Rook(Colours.BLACK, this.getCell(0, 0))
    new Rook(Colours.BLACK, this.getCell(7, 0))
  }

  private addKnights() {
    new Knight(Colours.WHITE, this.getCell(1, 7))
    new Knight(Colours.WHITE, this.getCell(6, 7))
    new Knight(Colours.BLACK, this.getCell(1, 0))
    new Knight(Colours.BLACK, this.getCell(6, 0))
  }

  private addBishops() {
    new Bishop(Colours.WHITE, this.getCell(2, 7))
    new Bishop(Colours.WHITE, this.getCell(5, 7))
    new Bishop(Colours.BLACK, this.getCell(2, 0))
    new Bishop(Colours.BLACK, this.getCell(5, 0))
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colours.WHITE, this.getCell(i, 6))
      new Pawn(Colours.BLACK, this.getCell(i, 1))
    }
  }

  public addFigures() {
    this.addQueens()
    this.addKings()
    this.addRooks()
    this.addKnights()
    this.addBishops()
    this.addPawns()
  }
}
