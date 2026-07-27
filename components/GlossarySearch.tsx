"use client";

import { useMemo, useState } from "react";
import { orderedGlossary } from "@/lib/glossary";

export function GlossarySearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orderedGlossary;
    return orderedGlossary.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.example?.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search terms…"
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-500"
      />

      <dl className="mt-8 flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
        {filtered.map((t) => (
          <div key={t.term} id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="py-5">
            <dt className="font-medium text-neutral-900 dark:text-neutral-100">{t.term}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t.definition}
            </dd>
            {t.example && (
              <dd className="mt-2 rounded-lg bg-neutral-50 px-3 py-2 text-sm italic leading-relaxed text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                &quot;{t.example}&quot;
              </dd>
            )}
            {t.related && t.related.length > 0 && (
              <dd className="mt-2 text-xs text-neutral-400">
                Related: {t.related.join(", ")}
              </dd>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-sm text-neutral-500">No terms match &quot;{query}&quot;.</p>
        )}
      </dl>
    </div>
  );
}
