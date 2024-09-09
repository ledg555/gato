import { Input } from "@/components/ui/input";
import Opener from "@/components/Opener";

export default function PlayesBar({ players, turn, handlePlayersChange, board, winner, handleOpenerChange }) {
  return (
    <section className="flex justify-center items-center gap-3 w-5/6 h-min py-2">
      <Input value={players[0]} onChange={(e) => handlePlayersChange(0, e.target.value)} className={`text-end font-bold ${turn && "bg-emerald-100 text-emerald-500"}`}/>
      <Opener board={board} winner={winner} handleOpenerChange={handleOpenerChange}/>
      <Input value={players[1]} onChange={(e) => handlePlayersChange(1, e.target.value)} className={`font-bold ${!turn && "bg-emerald-100 text-emerald-500"}`}/>
    </section>
  );
}
