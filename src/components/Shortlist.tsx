import { useState } from "react";
import { usePuppies } from "../context/puppy-context";
import { toggleLiked } from "../queries/toggle-liked";
import { Puppy } from "../types";
import { LoaderCircle } from "lucide-react";

export function Shortlist() {
  const { puppies, setPuppies } = usePuppies();
  const shortListedPuppies = puppies.filter((puppy) =>
    puppy.likedBy.includes(1),
  );
  if (!shortListedPuppies.length) return null;
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {shortListedPuppies.map((puppy) => (
          <li
            key={puppy.id}
            className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0"
          >
            <img
              height={32}
              width={32}
              alt={puppy.name}
              className="aspect-square w-8 object-cover"
              src={puppy.imageUrl}
            />
            <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
            <RemoveButton id={puppy.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function RemoveButton({ id }: { id: Puppy["id"] }) {
  const { setPuppies } = usePuppies();
  const [isPending, setIsPending] = useState(false);
  async function removePuppy(id: Puppy["id"]) {
    setIsPending(true);
    const updatedPuppies = await toggleLiked(id);
    setPuppies(updatedPuppies);
    setIsPending(false);
  }
  return (
    <button
      onClick={() => removePuppy(id)}
      className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
    >
      {isPending ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )}
    </button>
  );
}
