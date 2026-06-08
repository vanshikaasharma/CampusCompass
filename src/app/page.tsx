import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6">
      <main className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          CampusCompass
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900">
          Find student benefits that match you
        </h1>
        <p className="mt-4 text-lg text-zinc-600">Landing page</p>

        <Link
          href="/quiz"
          className="mt-8 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          Start quiz
        </Link>
      </main>
    </div>
  );
}
