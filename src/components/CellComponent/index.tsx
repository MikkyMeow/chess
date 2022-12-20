import React, { FC } from "react";
import { Cell } from "../../models/Cell";

interface ICellComponentProps {
  cell: Cell;
  isSelected: boolean;
  onClick: (cell: Cell) => void;
}

const CellComponent: FC<ICellComponentProps> = ({
  cell,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`cell ${cell.color} ${isSelected ? "selected" : ""} ${
        cell.figure && cell.available ? "attack" : ""
      }`}
      onClick={() => onClick(cell)}
    >
      {!cell.figure && cell.available && <div className="available"></div>}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};

export default CellComponent;
