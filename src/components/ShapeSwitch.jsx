import { Button } from "@/components/ui/button";
import { RiCircleLine } from "react-icons/ri";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ShapeSwitch({board, winner, p1Shape, handleShapeChange}) {
  return (
    <section className="flex justify-center items-center gap-2 w-1/2 h-min text-center mt-5 pb-2">
      {p1Shape ? <RiCircleLine /> : <RiCloseLargeLine />}
      <Button
      variant="icon"
      size="sm"
        disabled={!(winner || board.every((cell) => cell === null))}
        onClick={handleShapeChange}
      >
        <RiLoopLeftLine/>
      </Button>
      {p1Shape ? <RiCloseLargeLine /> : <RiCircleLine />}
    </section>
  );
}