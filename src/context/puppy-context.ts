import { createContext, use } from "react";
import { Puppy } from "../types";

export const PuppyContext = createContext<{
  puppies: Puppy[];
  liked: Puppy["id"][];
  setLiked: React.Dispatch<React.SetStateAction<Puppy["id"][]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export function usePuppies() {
  const context = use(PuppyContext);
  if (!context) {
    throw new Error(
      "The `usePuppies` hook must be used within a <PuppyContext> wrapper",
    );
  }
  return context;
}
