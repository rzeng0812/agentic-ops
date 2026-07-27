import Link from "next/link";
import { notFound } from "next/navigation";
import { orderedModules, getModuleBySlug } from "@/lib/modules";
import { CompleteToggle } from "@/components/CompleteToggle";

import ProblemSelection from "@/content/modules/01-problem-selection.mdx";
import AgentFundamentals from "@/content/modules/02-agent-fundamentals.mdx";
import BuildBuyOrWait from "@/content/modules/03-build-buy-or-wait.mdx";
import RunningAPilot from "@/content/modules/04-running-a-pilot.mdx";
import Integration from "@/content/modules/05-integration.mdx";
import Governance from "@/content/modules/06-governance.mdx";
import MeasuringAndScaling from "@/content/modules/07-measuring-and-scaling.mdx";

const content: Record<string, React.ComponentType> = {
  "problem-selection": ProblemSelection,
  "agent-fundamentals": AgentFundamentals,
  "build-buy-or-wait": BuildBuyOrWait,
  "running-a-pilot": RunningAPilot,
  integration: Integration,
  governance: Governance,
  "measuring-and-scaling": MeasuringAndScaling,
};

export function generateStaticParams() {
  return orderedModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  return {
    title: mod ? `${mod.title} — Agentic Ops` : "Module — Agentic Ops",
    description: mod?.summary,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  const Content = content[slug];

  if (!mod || !Content) {
    notFound();
  }

  const index = orderedModules.findIndex((m) => m.slug === mod.slug);
  const prev = orderedModules[index - 1];
  const next = orderedModules[index + 1];

  return (
    <article>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
        Module {mod.order} · {mod.stage} · {mod.readTime}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{mod.title}</h1>
      <p className="mt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        {mod.summary}
      </p>
      <div className="mt-5">
        <CompleteToggle slug={mod.slug} />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-neutral-900 dark:prose-a:text-neutral-100">
        <Content />
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm dark:border-neutral-800">
        {prev ? (
          <Link href={`/modules/${prev.slug}`} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/modules/${next.slug}`} className="font-medium text-neutral-900 hover:underline dark:text-neutral-100">
            {next.title} →
          </Link>
        ) : (
          <Link href="/cheat-sheets" className="font-medium text-neutral-900 hover:underline dark:text-neutral-100">
            Review the cheat sheets →
          </Link>
        )}
      </div>
    </article>
  );
}
