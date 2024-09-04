function computeWinner(winnerSets) {
  for (let set of winnerSets) {
    let scores = set.reduce(
      (r, e) => {
        if (e === "o") r[0] += 1;
        if (e === "×") r[1] += 1;
        return r;
      },
      [0, 0]
    );
    if (scores[0] === 3) return 1;
    if (scores[1] === 3) return 2;
  }
  return null;
}

export {computeWinner};