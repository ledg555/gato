export default function Cell({children, onClick}) {
  return (
    <div
      className="aspect-square border border-yellow-400 text-center text-6xl"
      onClick={onClick}
    >
      <p className="mt-3">{"❌"}</p>
    </div>
  );
}
