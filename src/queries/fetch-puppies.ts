export async function fetchPuppies() {
  try {
    const response = await fetch("http://react-backend.test/api/puppies", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
