export function NewPuppyForm() {
  return (
    <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
      <form
        action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        className="mt-4 flex w-full flex-col items-start gap-4"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="name"
              type="text"
              name="name"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="breed">Breed</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="breed"
              type="text"
              name="breed"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="trait">Personality trait</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="trait"
              type="text"
              name="trait"
            />
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="age">Age (in human years)</label>
            <input
              className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              id="age"
              type="number"
              name="age"
            />
          </fieldset>
          {/* <fieldset class="col-span-2 flex w-full flex-col gap-1">
          <label for="avatar_url">Profile pic</label
          ><input
            class="rounded-sm bg-white px-2 py-1 ring ring-black/20 max-w-96 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            id="avatar_url"
            type="file"
            name="avatar_url"
          />
        </fieldset> */}
        </div>
        <button
          className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          type="submit"
        >
          Add puppy
        </button>
      </form>
    </div>
  );
}
