import ResetDialog from "@/components/ResetDialog";
import { Button } from "@/components/ui/button";

export default function ResetBar({
  board,
  winner,
  scores,
  resetBoard,
  resetScores,
}) {
  return (
    <section className="grid grid-cols-2 justify-items-center w-72 h-min mx-auto pt-2">
      {winner || board.every((cell) => cell === null) ? (
        <Button
        variant="destructive"
          className="w-28"
          disabled={!winner}
          onClick={resetBoard}
        >
          Reset board
        </Button>
      ) : (
        <ResetDialog type="board" reseter={resetBoard}></ResetDialog>
      )}
      {scores.every((score) => score === 0) ? (
        <Button variant="hyperDestructive" className="w-28" disabled>
          Reset scores
        </Button>
      ) : (
        <ResetDialog type="scores" reseter={resetScores}></ResetDialog>
      )}
    </section>
  );
}
