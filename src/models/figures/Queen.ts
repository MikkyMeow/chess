import { Cell } from "../Cell";
import { EColors } from "../Colors";
import { EFigure, Figure } from "./Figure";
import blackLogo from "../../assets/icons/black-queen.png";
import whiteLogo from "../../assets/icons/white-queen.png";

export class Queen extends Figure {
  constructor(color: EColors, cell: Cell) {
    super(color, cell);
    this.logo = color === EColors.BLACK ? blackLogo : whiteLogo;
    this.name = EFigure.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
