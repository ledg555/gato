import { useState } from "react";
import ShapeSwitch from "@/components/ShapeSwitch";
import PlayersBar from "@/components/PlayersBar";
import Scores from "@/components/Scores";
import Board from "@/components/Board";
import VictoryMessage from "./components/VictoryMessage";
import ResetBar from "./components/ResetBar";
import Turn from "@/components/Turn";
import { initialBoard, computeWinner, computeScores } from "@/lib/utils";

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [winner, setWinner] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [opener, setOpener] = useState(true);
  const [p1Shape, setp1Shape] = useState(true);
  const [turn, setTurn] = useState(true);

  function handlePlayersChange(player, newName) {
    let playersNewNames = [...players];
    playersNewNames[player] = newName;
    setPlayers(playersNewNames);
  }

  function handleCellClick(index) {
    if (!winner && !board[index]) {
      let nextBoard = [...board];
      nextBoard[index] = turn && p1Shape ? "o" : "x";
      let nextWinner = computeWinner(nextBoard);
      let nextScores = computeScores(nextWinner, scores);
      setBoard(nextBoard);
      setTurn(!turn);
      setWinner(nextWinner);
      setScores(nextScores);
    }
  }

  function handleResetBoard() {
    const clearedBoard = [...initialBoard];
    setBoard(clearedBoard);
    setWinner(0);
    setTurn(opener);
  }

  function handleResetScores() {
    const clearedBoard = [...initialBoard];
    const clearedScores = [0,0];
    setBoard(clearedBoard);
    setScores(clearedScores);
    setWinner(0);
    setTurn(opener);
  }

  return (
    <div className="bg-slate-300">
      <main className="grid grid-cols-1 justify-items-center w-96 mx-auto bg-blue-200">
        <h1 className="text-center bg-slate-50">Gato</h1>
        <ShapeSwitch />
        <PlayersBar
          players={players}
          handlePlayersChange={handlePlayersChange}
        />
        <Scores scores={scores} />
        <Board board={board} handleCellClick={handleCellClick} />
        <section>
          <Turn form="o" isYourTurn={turn === true}></Turn>
          <Turn form="×" isYourTurn={turn === false}></Turn>
        </section>
        <VictoryMessage players={players} winner={winner} />
      </main>
      <footer>
        <ResetBar board={board} winner={winner} scores={scores} resetBoard={handleResetBoard} resetScores={handleResetScores}></ResetBar>
        <p className="text-center">Made by <a href="/">ledg555</a></p>
      </footer>
    </div>
  );
}
