"use client";

import Link from "next/link";
import { orderedModules } from "@/lib/modules";
import { useProgress } from "@/lib/progress";

export function ProgressSummary() {
  const { completed } = useProgress();
  const total = orderedModules.length;
  const done = completed.size;
  const nextModule = orderedModules.find((m) => !completed.has(m.slug)) ?? orderedModules[0];

  return (
    <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Your progress
        </p>
        <p className="text-sm tabular-nums text-neutral-500">
          {done} / {total} modules
        </p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${total ? (done / total) * 100 : 0}%` }}
        />
      </div>
      <Link
        href={`/modules/${nextModule.slug}`}
        className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
      >
        {done === 0 ? "Start with Module 1" : done === total ? "Review any module" : "Continue where you left off"}
        {" →"}
      </Link>
    </div>
  );
}
