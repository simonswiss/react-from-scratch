export function App() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      {/* Max-width container */}
      <div className="mx-auto max-w-5xl p-4 md:p-8">
        {/* Header */}
        <header>
          {/* Logo */}
          <a className="group" href="/">
            <div className="inline-flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="DevPups"
                className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
              />
              <p className="text-lg font-semibold">Dev Pups</p>
            </div>
          </a>
          {/* Hero copy */}
          <div className="mt-6">
            <h1 className="text-lg font-bold">We've got the best puppies!</h1>
            <p className="text-slate-600">
              Don't take our word — let the pictures do the talking :)
            </p>
          </div>
        </header>
      </div>
    </main>
  );
}
