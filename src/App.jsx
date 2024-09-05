import { useState } from "react";
import ShapeSwitch from "@/components/ShapeSwitch";
import PlayersBar from "@/components/PlayerNames";
import Scores from "@/components/Scores";
import Board from "@/components/Board";
import Turn from "@/components/Turn";
import { computeWinner } from "@/lib/handlers";
import { initialBoard } from "@/lib/utils";
import { RiCircleLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

const o = <RiCircleLine />;
const x = <RiCloseLargeLine />;

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [scores, setScores] = useState([0, 0]);
  const [turn, setTurn] = useState(true);
  const [p1Shape, setp1Shape] = useState(true);

  const winner = computeWinner(board);


  function handleCellClick(index) {
    if (!winner && !board[index]) {
      let nextBoard = [...board];
      nextBoard[index] = (turn && p1Shape) ? "o" : "x";
      setBoard(nextBoard);
      setTurn(!turn);
    }
  }

  return (
    <div className="bg-slate-300">
      <main className="grid grid-cols-1 justify-items-center w-96 mx-auto bg-blue-200">
        <h1 className="text-center bg-slate-50">Gato</h1>
        <ShapeSwitch />
        <PlayersBar />
        <Scores />
        <Board board={board} handleCellClick={handleCellClick} />
        <section>
          <Turn form="o" isYourTurn={turn === true}></Turn>
          <Turn form="×" isYourTurn={turn === false}></Turn>
        </section>
        <section>{winner && <p>Player {winner} wins!!</p>}</section>
      </main>
    </div>
  );
}
