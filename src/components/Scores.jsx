import { Input } from "@/components/ui/input";

export default function Scores({scores}) {
  return (
    <section className="flex justify-center gap-1 w-1/3 text-center">
      <Input value={scores[0]} readOnly/>
      :
      <Input value={scores[1]} readOnly/>
    </section>
  );
}