import { Figure, FigureNames } from './Figure'
import { Colours } from '../Colours'
import { Cell } from '../Cell'
import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
  constructor(colour: Colours, cell: Cell) {
    super(colour, cell)
    this.logo = colour === Colours.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KNIGHT
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }

    const dX = Math.abs(this.cell.x - target.x)
    const dY = Math.abs(this.cell.y - target.y)

    return (dX === 1 && dY === 2) || (dY === 1 && dX === 2)
  }
}
