import { useState } from "react";
import Cell from "./components/Cell";
import Turn from "./components/Turn";

const TURNS = {
  x: "×",
  o: "o",
};

export default function App() {
  const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [turn, setTurn] = useState(true);

  return (
    <main className="flex justify-center w-full">
      <h1>Gato</h1>
      <section className="grid grid-cols-3">
        {board.map((e, i) => (
          <Cell key={i}>{board[i]}</Cell>
        ))}
      </section>
      <section>
        <Turn form="o" isYourTurn={turn === true}></Turn>
        <Turn form="×" isYourTurn={turn === false}></Turn>
      </section>
    </main>
  );
}
