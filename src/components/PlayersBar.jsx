import { Input } from "@/components/ui/input";
import Opener from "@/components/Opener";

export default function PlayesBar({ players, handlePlayersChange }) {
  return (
    <section className="flex justify-center items-end gap-1 w-3/4">
      <Input value={players[0]} onChange={(e) => handlePlayersChange(0, e.target.value)}/>
      <Opener />
      <Input value={players[1]} onChange={(e) => handlePlayersChange(1, e.target.value)}/>
    </section>
  );
}
