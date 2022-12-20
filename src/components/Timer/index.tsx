import { FC, useEffect, useRef, useState } from "react";
import { EColors } from "../../models/Colors";
import { Player } from "../../models/Player";

interface ITimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<ITimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(0);
  const [whiteTime, setWhiteTime] = useState(0);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const cb =
      currentPlayer?.color === EColors.BLACK
        ? incrementBlackTime
        : incrementWhiteTime;
    timer.current = setInterval(cb, 1000);
  };

  const incrementBlackTime = () => {
    setBlackTime((prev) => prev + 1);
  };

  const incrementWhiteTime = () => {
    setWhiteTime((prev) => prev + 1);
  };

  const handleRestart = () => {
    setWhiteTime(0);
    setBlackTime(0);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  return (
    <div>
      <button onClick={handleRestart}>Рестарт</button>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
