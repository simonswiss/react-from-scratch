import { usePuppies } from "../context/puppy-context";
import { PuppyCard } from "./PuppyCard";

export function PuppiesList() {
  const { puppies } = usePuppies();
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies.map((puppy) => (
        <PuppyCard key={puppy.id} puppy={puppy} as="li" />
      ))}
    </ul>
  );
}
