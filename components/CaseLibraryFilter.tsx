"use client";

import { useMemo, useState } from "react";
import { cases, industries, functions } from "@/lib/cases";

const stageColors: Record<string, string> = {
  Select: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  Pilot: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Integrate: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  Govern: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Scale: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

export function CaseLibraryFilter() {
  const [industry, setIndustry] = useState<string>("All");
  const [fn, setFn] = useState<string>("All");

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      if (industry !== "All" && c.industry !== industry) return false;
      if (fn !== "All" && c.function !== fn) return false;
      return true;
    });
  }, [industry, fn]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        >
          <option value="All">All industries</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <select
          value={fn}
          onChange={(e) => setFn(e.target.value)}
          className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        >
          <option value="All">All functions</option>
          {functions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {filtered.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${stageColors[c.stage] ?? stageColors.Select}`}
              >
                {c.stage}
              </span>
              <span className="text-xs text-neutral-400">{c.industry}</span>
              <span className="text-xs text-neutral-300">·</span>
              <span className="text-xs text-neutral-400">{c.function}</span>
            </div>
            <p className="mt-2.5 font-medium text-neutral-900 dark:text-neutral-100">
              {c.title}
            </p>
            <p className="text-sm text-neutral-500">{c.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {c.summary}
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-900 dark:text-neutral-100">
              {c.result}
            </p>
            {c.depth && (
              <details className="mt-3 group">
                <summary className="cursor-pointer text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                  What actually happened →
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {c.depth}
                </p>
              </details>
            )}
            <a
              href={c.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              Source: {c.sourceName}
            </a>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-neutral-500">No cases match these filters.</p>
        )}
      </div>
    </div>
  );
}
