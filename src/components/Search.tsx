import { Delete } from "lucide-react";

export function Search() {
  return (
    <div>
      <label htmlFor="search" className="font-medium">
        Search for a character trait
      </label>
      <div className="mt-2 flex items-center gap-4">
        <input
          placeholder="playful..."
          name="search"
          id="search"
          type="text"
          className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
        <button className="inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
          <Delete className="stroke-cyan-900" />
        </button>
      </div>
    </div>
  );
}
