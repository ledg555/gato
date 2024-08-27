export default function Cell({children,}) {
  return (
    <div className="w-16 h-16 border border-yellow-100 text-center">
      <span className="text-xl">{children}</span>
    </div>
  );
}
