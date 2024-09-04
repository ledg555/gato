import { useState } from "react";
import Opener from "./components/Opener";
import ShapeSwitcher from "./components/ShapeSwitcher";
import PlayerNames from "./components/PlayerNames";
import Scores from "./components/Scores";
import Cell from "./components/Cell";
import Turn from "./components/Turn";
import { computeWinner } from "./handlers/functions";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const winnerSets = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  function handleCellClick(index) {
    if (!board[index]) {
      let nextBoard = [...board];
      nextBoard[index] = turn ? "o" : "×";
      setBoard(nextBoard);
      setTurn(!turn);
    }
  }

  let winner = computeWinner(winnerSets);
  
  return (
    <div className="container bg-slate-200">
      <main className="grid grid-cols-1 justify-items-center w-[90%] mx-auto">
        <h1 className="text-center bg-slate-50">Gato</h1>
        <Opener/>
        <ShapeSwitcher></ShapeSwitcher>
        <PlayerNames></PlayerNames>
        <Scores></Scores>
        <section className="grid grid-cols-3 w-full aspect-square ">
          {board.map((e, i) => (
            <Cell key={i} onClick={() => handleCellClick(i)}>
              {board[i]}
            </Cell>
          ))}
        </section>
        <section>
          <Turn form="o" isYourTurn={turn === true}></Turn>
          <Turn form="×" isYourTurn={turn === false}></Turn>
        </section>
        <section>{winner && <p>Player {winner} wins!!</p>}</section>
      </main>
    </div>
  );
}
