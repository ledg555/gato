import { Input } from "@/components/ui/input";
import Opener from "@/components/Opener";

export default function PlayesBar() {
  return (
    <section className="flex justify-center items-end gap-1 w-3/4">
      <Input />
      <Opener />
      <Input />
    </section>
  );
}
