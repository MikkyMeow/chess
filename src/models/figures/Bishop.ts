import { Cell } from "../Cell";
import { EColors } from "../Colors";
import { EFigure, Figure } from "./Figure";
import blackLogo from "../../assets/icons/black-bishop.png";
import whiteLogo from "../../assets/icons/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: EColors, cell: Cell) {
    super(color, cell);
    this.logo = color === EColors.BLACK ? blackLogo : whiteLogo;
    this.name = EFigure.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
