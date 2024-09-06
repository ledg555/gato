export default function VictoryMessage({ players, winner }) {
  let formattedPlayer = "";
  switch (winner) {
    case 0:
      return <p>hola</p>;
    case 1:
    case 2:
      formattedPlayer = players[winner - 1];
      console.log(formattedPlayer);
      formattedPlayer.charAt(formattedPlayer.length - 1) === "s"
        ? (formattedPlayer += "'")
        : (formattedPlayer += "'s");
      return <h2>{formattedPlayer} victory!</h2>;
    case 3:
      return <h2>Draw!</h2>;
  }
}
