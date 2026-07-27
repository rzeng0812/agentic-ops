import type { Metadata } from "next";
import { orderedModules } from "@/lib/modules";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Cheat Sheets — Agentic Ops",
  description: "One-page framework summaries per module, ready before a vendor call or internal pitch.",
};

export default function CheatSheetsPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 print:hidden">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Reference</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Cheat Sheets</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            The framework from each module, stripped to what you need in the room.
          </p>
        </div>
        <PrintButton />
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {orderedModules.map((m) => (
          <section
            key={m.slug}
            className="break-inside-avoid rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Module {m.order} · {m.stage}
            </p>
            <h2 className="mt-1 text-lg font-semibold tracking-tight">{m.title}</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {m.cheatSheet.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
