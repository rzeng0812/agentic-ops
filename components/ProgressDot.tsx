"use client";

import { useProgress } from "@/lib/progress";

export function ProgressDot({ slug }: { slug: string }) {
  const { isComplete } = useProgress();
  const done = isComplete(slug);

  return (
    <span
      aria-hidden
      className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
        done ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-700"
      }`}
    />
  );
}
