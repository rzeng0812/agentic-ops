"use client";

import { useProgress } from "@/lib/progress";

export function CompleteToggle({ slug }: { slug: string }) {
  const { isComplete, toggle } = useProgress();
  const done = isComplete(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        done
          ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
          : "border-neutral-300 text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300"
      }`}
    >
      <span
        className={`inline-block h-2 w-2 rounded-full ${
          done ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-700"
        }`}
        aria-hidden
      />
      {done ? "Completed" : "Mark as complete"}
    </button>
  );
}
