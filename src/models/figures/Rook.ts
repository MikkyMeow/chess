import { Cell } from "../Cell";
import { EColors } from "../Colors";
import { EFigure, Figure } from "./Figure";
import blackLogo from "../../assets/icons/black-rook.png";
import whiteLogo from "../../assets/icons/white-rook.png";

export class Rook extends Figure {
  constructor(color: EColors, cell: Cell) {
    super(color, cell);
    this.logo = color === EColors.BLACK ? blackLogo : whiteLogo;
    this.name = EFigure.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
