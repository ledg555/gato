import { useState } from "react";
import ShapeSwitch from "@/components/ShapeSwitch";
import PlayersBar from "@/components/PlayersBar";
import Scores from "@/components/Scores";
import Board from "@/components/Board";
import VictoryMessage from "./components/VictoryMessage";
import ResetBar from "./components/ResetBar";
import { initialBoard, computeWinner, computeScores } from "@/lib/utils";

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [players, setPlayers] = useState(["Player 1", "Player 2"]);
  const [winner, setWinner] = useState(0);
  const [scores, setScores] = useState([0, 0]);
  const [opener, setOpener] = useState(true);
  const [p1Shape, setP1Shape] = useState(true);
  const [turn, setTurn] = useState(true);

  function handleOpenerChange() {
    const newOpener = !opener;
    setOpener(newOpener);
    setTurn(newOpener);
  }

  function handleShapeChange() {
    setP1Shape(!p1Shape);
  }

  function handlePlayersChange(player, newName) {
    let playersNewNames = [...players];
    playersNewNames[player] = newName;
    setPlayers(playersNewNames);
  }

  function handleCellClick(index) {
    if (!winner && !board[index]) {
      let nextBoard = [...board];
      nextBoard[index] = p1Shape ? (turn ? "o" : "x") : turn ? "x" : "o";
      let nextWinner = computeWinner(nextBoard, p1Shape);
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
    const clearedScores = [0, 0];
    setBoard(clearedBoard);
    setScores(clearedScores);
    setWinner(0);
    setTurn(opener);
  }

  return (
    <div className="grid grid-cols-1 justify-center content-around min-h-full min-w-screen">
      <header className="shadow">
        <h1 className="text-center text-4xl sm:text-5xl py-3 sm:py-5 h-min font-bold">
          # TicTapToe #
        </h1>
      </header>
      <main className="grid grid-cols-1 justify-items-center content-start w-80 mx-auto">
        <ShapeSwitch
          board={board}
          winner={winner}
          handleShapeChange={handleShapeChange}
          p1Shape={p1Shape}
        />
        <PlayersBar
          players={players}
          turn={turn}
          handlePlayersChange={handlePlayersChange}
          board={board}
          winner={winner}
          handleOpenerChange={handleOpenerChange}
        />
        <Scores scores={scores} />
        <Board board={board} handleCellClick={handleCellClick} />
        <VictoryMessage players={players} winner={winner} />
        <ResetBar
          board={board}
          winner={winner}
          scores={scores}
          resetBoard={handleResetBoard}
          resetScores={handleResetScores}
        />
      </main>
      <footer>
        <p className="text-center h-min pt-6 pb-2">
          Made by{" "}
          <a
            href="https://github.com/ledg555"
            className="text-cyan-500 hover:text-cyan-400"
          >
            @ledg555
          </a>
        </p>
      </footer>
    </div>
  );
}
