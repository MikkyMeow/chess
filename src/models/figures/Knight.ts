import { Cell } from "../Cell";
import { EColors } from "../Colors";
import { EFigure, Figure } from "./Figure";
import blackLogo from "../../assets/icons/black-knight.png";
import whiteLogo from "../../assets/icons/white-knight.png";

export class Knight extends Figure {
  constructor(color: EColors, cell: Cell) {
    super(color, cell);
    this.logo = color === EColors.BLACK ? blackLogo : whiteLogo;
    this.name = EFigure.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
