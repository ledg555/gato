import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initialBoard = Array(9).fill(null);

export function computeWinner(board, p1Shape) {
  const winnerSets = [
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]],
  ];

  for (let set of winnerSets) {
    let count = set.reduce(
      (r, cell) => {
        if (cell === "o") p1Shape ? (r[0] += 1) : (r[1] += 1);
        if (cell === "x") p1Shape ? (r[1] += 1) : (r[0] += 1);
        return r;
      },
      [0, 0]
    );
    if (count[0] === 3) return 1;
    if (count[1] === 3) return 2;
  }
  return board.every((cell) => cell !== null) ? 3 : 0; //draw or -
}

export function computeScores(winner, scores) {
  if (winner === 1 || winner == 2) {
    let newScores = [...scores];
    winner === 1 ? (newScores[0] += 1) : (newScores[1] += 1);
    return newScores;
  }
  return [...scores];
}
