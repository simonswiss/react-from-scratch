import { createContext, Dispatch, SetStateAction, use } from "react";
import { Puppy } from "../types";

export const PuppyContext = createContext<{
  puppies: Puppy[];
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
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
