import { Cell } from "../Cell";
import { EColors } from "../Colors";
import { EFigure, Figure } from "./Figure";
import blackLogo from "../../assets/icons/black-pawn.png";
import whiteLogo from "../../assets/icons/white-pawn.png";

export class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(color: EColors, cell: Cell) {
    super(color, cell);
    this.logo = color === EColors.BLACK ? blackLogo : whiteLogo;
    this.name = EFigure.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const direction = this.cell.figure?.color === EColors.BLACK ? 1 : -1;
    const firstStepDirection =
      this.cell.figure?.color === EColors.BLACK ? 2 : -2;

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
