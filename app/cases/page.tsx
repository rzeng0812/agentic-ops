import type { Metadata } from "next";
import { CaseLibraryFilter } from "@/components/CaseLibraryFilter";

export const metadata: Metadata = {
  title: "Case Library — Agentic Ops",
  description: "Sourced, cited examples of AI agent deployments in business operations.",
};

export default function CasesPage() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Reference</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Case Library</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        Real, sourced examples — not marketing case studies. Every entry links to where the
        number came from so you can go verify it yourself.
      </p>
      <div className="mt-8">
        <CaseLibraryFilter />
      </div>
    </div>
  );
}
