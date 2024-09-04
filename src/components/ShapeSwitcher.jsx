import { Button } from "@/components/ui/button";
import { RiCircleLine } from "react-icons/ri";
import { RiLoopLeftLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function ShapeSwitcher() {
  return (
    <section className="flex justify-center items-center gap-1 w-1/3 text-center">
      <RiCircleLine />
      <Button>
        <RiLoopLeftLine />
      </Button>
      <RiCloseLargeLine />
    </section>
  );
}