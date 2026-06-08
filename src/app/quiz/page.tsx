import Link from "next/link";

export default function QuizPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6">
      <main className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-zinc-900">Quiz page</h1>
        <p className="mt-4 text-zinc-600">
          This is a placeholder. We will build the real quiz in Phase 5.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          ← Back to home
        </Link>
      </main>
    </div>
  );
}
