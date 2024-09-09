import {cn} from "@/lib/utils";

export default function Cell({ children, onClick }) {
  return (
    <div
      className="aspect-square border flex justify-center items-center text-6xl cel"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
