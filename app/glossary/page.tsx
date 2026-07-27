import type { Metadata } from "next";
import { GlossarySearch } from "@/components/GlossarySearch";

export const metadata: Metadata = {
  title: "Glossary — Agentic Ops",
  description: "Plain-terms definitions for the vocabulary of AI agents in business operations.",
};

export default function GlossaryPage() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Reference</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Glossary</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        The vocabulary you actually need to evaluate a vendor pitch or a build proposal —
        no more, no less. Referenced throughout the modules.
      </p>
      <div className="mt-8">
        <GlossarySearch />
      </div>
    </div>
  );
}
