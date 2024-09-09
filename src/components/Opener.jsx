import {Switch} from "@/components/ui/switch";

export default function Opener({board, winner, handleOpenerChange}) {
  let openerColor = !(winner || board.every((cell) => cell === null));
  return (
    <section className="flex flex-col justify-center items-center gap-0.5 text-center">
      <p className="text-xs -mt-[7px]">Starter</p>
      <Switch
        disabled={!(winner || board.every((cell) => cell === null))}
        onClick={handleOpenerChange}
      />
    </section>
  );
}