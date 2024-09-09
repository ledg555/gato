export default function VictoryMessage({ players, winner }) {
  let message = "";
  switch (winner) {
    case 1:
    case 2:
      message = players[winner - 1];
      message.charAt(message.length - 1) === "s"
        ? (message += "'")
        : (message += "'s");
      message += " victory!";
      break;
    case 3:
      message = "Draw!";
  }
  return <h2 className="pb-1 pt-5 h-14 font-bold text-xl">{message}</h2>;
}
