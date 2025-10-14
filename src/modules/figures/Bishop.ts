import { Figure, FigureNames } from './Figure'
import { Colours } from '../Colours'
import { Cell } from '../Cell'
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    
  constructor(colour: Colours, cell: Cell) {
    super(colour, cell)
    this.logo = colour === Colours.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.BISHOP
  }
}
