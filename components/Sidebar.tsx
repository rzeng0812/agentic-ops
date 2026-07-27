import Link from "next/link";
import { orderedModules } from "@/lib/modules";
import { ProgressDot } from "@/components/ProgressDot";

const resourceLinks = [
  { href: "/glossary", label: "Glossary" },
  { href: "/cases", label: "Case Library" },
  { href: "/cheat-sheets", label: "Cheat Sheets" },
];

export function Sidebar() {
  return (
    <nav className="flex h-full w-64 shrink-0 flex-col gap-8 overflow-y-auto border-r border-neutral-200 px-5 py-8 print:hidden dark:border-neutral-800">
      <Link href="/" className="block">
        <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Agentic Ops
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          AI agents for business automation
        </p>
      </Link>

      <div>
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Curriculum
        </p>
        <ol className="flex flex-col gap-0.5">
          {orderedModules.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/modules/${m.slug}`}
                className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                <ProgressDot slug={m.slug} />
                <span className="text-neutral-400 tabular-nums">{m.order}.</span>
                <span className="leading-snug">{m.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Reference
        </p>
        <ul className="flex flex-col gap-0.5">
          {resourceLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
