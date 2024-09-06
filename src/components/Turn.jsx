export default function Turn({ form, isYourTurn }) {
  return <div className={`w-8 h-8 text-center ${isYourTurn && "bg-lime-500"}`}>{form}</div>;
}
