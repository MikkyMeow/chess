import React, { useCallback, useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import "./App.css";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { EColors } from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(EColors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(EColors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }, [whitePlayer]);

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === EColors.BLACK ? whitePlayer : blackPlayer
    );
  };

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <h3>Потерянные фигуры</h3>
        <LostFigures title="Черные" figures={board.lostBlackFigures} />
        <LostFigures title="Белые" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;
