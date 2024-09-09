import { Input } from "@/components/ui/input";

export default function Scores({scores}) {
  return (
    <section className="flex justify-center items-center gap-2 w-1/2 h-max text-center pt-2 pb-4">
      <Input value={scores[0]} readOnly className="text-end w-16" />
      :
      <Input value={scores[1]} readOnly className="w-16" />
    </section>
  );
}