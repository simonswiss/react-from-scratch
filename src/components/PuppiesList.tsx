import { usePuppies } from "../context/puppy-context";
import { PuppyCard } from "./PuppyCard";

export function PuppiesList({ searchQuery }: { searchQuery: string }) {
  const { puppies } = usePuppies();
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies
        .filter((puppy) =>
          puppy.vibe.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} as="li" />
        ))}
    </ul>
  );
}
