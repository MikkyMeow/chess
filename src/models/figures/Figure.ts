import logo from "../../assets/icons/black-king.png";
import { Cell } from "../Cell";
import { EColors } from "../Colors";

export enum EFigure {
  FIGURE = "Фигура",
  KING = "Король",
  KNIGHT = "Конь",
  PAWN = "Пешка",
  QUEEN = "Ферзь",
  ROOK = "Ладья",
  BISHOP = "Слон",
}

export class Figure {
  color: EColors;
  logo: typeof logo | null;
  cell: Cell;
  name: EFigure;
  id: number;

  constructor(color: EColors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = EFigure.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === EFigure.KING) return false;
    return true;
  }

  moveFigure(target: Cell) {}
}
