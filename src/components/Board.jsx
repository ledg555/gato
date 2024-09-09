import Cell from "@/components/Cell";
import { RiCircleLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Board({board, handleCellClick}) {
    const o = <RiCircleLine className="text-cyan-400" />;
    const x = <RiCloseLargeLine className="text-red-400"/>;
  return (
    <section className="grid grid-cols-3 content-center w-3/4 aspect-square cell">
      {board.map((cell, i) => (
        <Cell key={i} onClick={() => handleCellClick(i)}>
          {cell === "o" && o}
          {cell === "x" && x}
        </Cell>
      ))}
    </section>
  );
}
