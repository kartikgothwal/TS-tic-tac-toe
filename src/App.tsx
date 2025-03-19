import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState<Array<"X" | "O" | "">>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const handleClick = (index: number) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <>
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <h1 className="my-2"> NextPlayer : {isXNext ? "X" : "O"}</h1>
        <div className="board">
          {board.map((item, index: number) => {
            return (
              <button
                className="square"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
