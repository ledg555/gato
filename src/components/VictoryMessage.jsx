export default function VictoryMessage({ players, winner }) {
  let formattedPlayer = "";
  switch (winner) {
    case 0:
      return <h2 className="h-min text-center pb-2 pt-4">hola</h2>;
    case 1:
    case 2:
      formattedPlayer = players[winner - 1];
      formattedPlayer.charAt(formattedPlayer.length - 1) === "s"
        ? (formattedPlayer += "'")
        : (formattedPlayer += "'s");
      return <h2 className="h-min pb-2 pt-4">{formattedPlayer} victory!</h2>;
    case 3:
      return <h2 className="h-min pb-2 pt-4">Draw!</h2>;
  }
}
