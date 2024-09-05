import Cell from "@/components/Cell";
import { RiCircleLine } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Board({board, handleCellClick}) {
    const o = <RiCircleLine />;
    const x = <RiCloseLargeLine />;
  return (
    <section className="grid grid-cols-3 content-center w-full aspect-square ">
      {board.map((e, i) => (
        <Cell key={i} onClick={() => handleCellClick(i)}>
          {board[i] === "o" && o}
          {board[i] === "x" && x}
        </Cell>
      ))}
    </section>
  );
}
