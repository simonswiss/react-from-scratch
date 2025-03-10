import { useFormStatus } from "react-dom";
import { usePuppies } from "../context/puppy-context";

export function NewPuppyForm() {
  const { setPuppies } = usePuppies();
  async function addPuppy(formData: FormData) {
    // Sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newPuppy = Object.fromEntries(formData);
    if (
      typeof newPuppy.name !== "string" ||
      typeof newPuppy.vibe !== "string"
    ) {
      return;
    }
    setPuppies((prev) => {
      const newData = [
        ...prev,
        {
          id: prev.length + 1,
          name: newPuppy.name as string,
          vibe: newPuppy.vibe as string,
          imagePath: `/images/${prev.length + 1}.jpg`,
        },
      ];
      console.log({ newData });
      return newData;
    });
    // [...prev, newPuppyData]});
    // setPuppies((currentPuppies) => [
    //   ...currentPuppies,
    //   {
    //     ...newPuppy,
    //     id: currentPuppies.length,
    //     imagePath: `/images/${currentPuppies.length}.jpg`,
    //   },
    // ]);
  }
  return (
    <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
      <form
        action={addPuppy}
        className="mt-4 flex w-full flex-col items-start gap-4"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              required
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="name"
              type="text"
              name="name"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="vibe">Personality trait</label>
            <input
              required
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="vibe"
              type="text"
              name="vibe"
            />
          </fieldset>
          <fieldset
            disabled
            className="col-span-2 flex w-full flex-col gap-1 opacity-50"
          >
            <label htmlFor="avatar_url">Profile pic</label>
            <input
              className="max-w-96 cursor-not-allowed rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="avatar_url"
              type="file"
              name="avatar_url"
            />
          </fieldset>
        </div>
        <Submit />
      </form>
    </div>
  );
}

function Submit() {
  const { pending, data } = useFormStatus();
  return (
    <>
      <button
        className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:opacity-50"
        type="submit"
        disabled={pending}
      >
        {pending ? `Adding ${data.get("name")}...` : "Add puppy"}
      </button>
    </>
  );
}
