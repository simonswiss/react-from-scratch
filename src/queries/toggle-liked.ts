import { Puppy } from "../types";
import { fetchPuppies } from "./fetch-puppies";

export async function toggleLiked(id: Puppy["id"]) {
  try {
    const response = await fetch(
      `http://react-backend.test/api/puppies/${id}/like`,
      {
        method: "POST",
      },
    );
    const data = await response.json();
    // Refetch the puppies
    const updatedPuppies = await fetchPuppies();
    return updatedPuppies.data;
  } catch (error) {
    throw new Error(error);
  }
}
