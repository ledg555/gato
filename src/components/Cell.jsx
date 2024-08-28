export default function Cell({children, onClick}) {
  return (
    <div className="w-16 h-16 border border-yellow-100 text-center" onClick={onClick}>
      <span className="text-xl">{children}</span>
    </div>
  );
}
