import {Switch} from "@/components/ui/switch";

export default function Opener({board, winner, handleOpenerChange}) {
  return (
    <section className="flex flex-col justify-center items-center gap-1 w-1/3 text-center">
      <p>Opener</p>
      <Switch
        disabled={!(winner || board.every((cell) => cell === null))}
        onClick={handleOpenerChange}
      />
    </section>
  );
}