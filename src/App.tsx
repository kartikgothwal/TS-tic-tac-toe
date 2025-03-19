import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState<Array<"X" | "O" | "">>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>("");
  const winnerPattern: Array<number[]> = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const handleClick = (index: number) => {
    if (winner) return;
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  useEffect(() => {
    for (const pattern of winnerPattern) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);
  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setIsXNext(true);
  };
  return (
    <>
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <h1 className="my-2">
          {winner ? `Winner ${winner}` : `NextPlayer : ${isXNext ? "X" : "O"}`}
        </h1>
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
        <button className="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
