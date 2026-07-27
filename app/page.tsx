import Link from "next/link";
import { orderedModules } from "@/lib/modules";
import { ProgressSummary } from "@/components/ProgressSummary";

export default function Home() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
        A working curriculum
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Learning how AI agents actually get deployed in business operations
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        Most AI-for-business content is organized around technology — what&apos;s an
        LLM, what&apos;s RAG, what&apos;s an agent. This is organized around the
        deployment lifecycle instead, because the evidence says that&apos;s where
        adoption actually succeeds or fails: choosing the right problem, proving
        it in a pilot, integrating it for real, governing it, and scaling it.
      </p>

      <div className="mt-8">
        <ProgressSummary />
      </div>

      <section className="mt-14">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
          The lifecycle
        </h2>
        <ol className="mt-4 flex flex-col divide-y divide-neutral-200 rounded-xl border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {orderedModules.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/modules/${m.slug}`}
                className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                  {m.order}
                </span>
                <span className="flex-1">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {m.title}
                    </span>
                    <span className="shrink-0 text-xs text-neutral-400">{m.readTime}</span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {m.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        <Link
          href="/glossary"
          className="rounded-xl border border-neutral-200 p-5 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
        >
          <p className="font-medium">Glossary</p>
          <p className="mt-1 text-sm text-neutral-500">
            The real vocabulary — agent, tool use, RAG, guardrails — defined in plain terms.
          </p>
        </Link>
        <Link
          href="/cases"
          className="rounded-xl border border-neutral-200 p-5 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
        >
          <p className="font-medium">Case Library</p>
          <p className="mt-1 text-sm text-neutral-500">
            Sourced, cited examples of what worked, what didn&apos;t, and the numbers behind both.
          </p>
        </Link>
        <Link
          href="/cheat-sheets"
          className="rounded-xl border border-neutral-200 p-5 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
        >
          <p className="font-medium">Cheat Sheets</p>
          <p className="mt-1 text-sm text-neutral-500">
            One page per module — the framework, stripped down, for before a real meeting.
          </p>
        </Link>
      </section>

      <section className="mt-14 rounded-xl border border-neutral-200 p-6 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        <p className="font-medium text-neutral-900 dark:text-neutral-100">How to use this</p>
        <p className="mt-2">
          Go through the six modules in order the first time — each one assumes the last.
          After that, use the Glossary and Case Library as reference, and the Cheat Sheets
          when you need the framework fast, before a vendor call or an internal pitch.
          Progress is tracked in your browser only; nothing is sent anywhere.
        </p>
      </section>
    </div>
  );
}
