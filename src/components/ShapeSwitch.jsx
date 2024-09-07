import { Button } from "@/components/ui/button";
import { RiCircleLine } from "react-icons/ri";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ShapeSwitch({board, winner, p1Shape, handleShapeChange}) {
  return (
    <section className="flex justify-center items-center gap-1 w-1/3 text-center">
      {p1Shape ? <RiCircleLine /> : <RiCloseLargeLine />}
      <Button
        disabled={!(winner || board.every((cell) => cell === null))}
        onClick={handleShapeChange}
      >
        <RiLoopLeftLine />
      </Button>
      {p1Shape ? <RiCloseLargeLine /> : <RiCircleLine />}
    </section>
  );
}