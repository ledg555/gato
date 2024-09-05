export default function Cell({children, onClick}) {
  return (
    <div
      className="aspect-square border border-yellow-400 bg-green-50 flex justify-center items-center text-8xl"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
