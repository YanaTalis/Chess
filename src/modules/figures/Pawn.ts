import { Figure, FigureNames } from './Figure'
import { Colours } from '../Colours'
import { Cell } from '../Cell'
import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {
  constructor(colour: Colours, cell: Cell) {
    super(colour, cell)
    this.logo = colour === Colours.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
