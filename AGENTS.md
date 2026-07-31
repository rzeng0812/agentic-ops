<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Content authoring guide

This site (Agentic Ops) is a static curriculum. No backend — everything ships as static HTML, progress tracking is client-side localStorage only.

## Where content lives

- **Modules**: `content/modules/NN-slug.mdx`. Order, title, slug, stage, summary, readTime, and the cheat-sheet bullets are NOT in the mdx file — they're registered in `lib/modules.ts`, which is the single source of truth for module metadata.
- **Case library**: `lib/cases.ts`. Each entry can carry an optional `depth` field (sourced narrative, shown as a collapsible "What actually happened" on the page). Every claim needs a real `sourceUrl` — never invent specifics about real, named companies. Aggregate/statistical entries don't need `depth`.
- **Glossary**: `lib/glossary.ts`. Each term has `definition` plus an optional `example` (one realistic usage sentence, not a dictionary example).
- **Callout component**: `components/Callout.tsx` — `type: "mistake" | "framework" | "data"`, optional `title` prop. Used for pull-out boxes in module MDX.
- GFM markdown tables work in MDX (remark-gfm is wired up in `next.config.ts` — must be passed as the string `"remark-gfm"`, not an imported function, or Turbopack's build fails with a non-serializable-loader-options error).

## Adding a new module

Touches three files:
1. `lib/modules.ts` — add the entry (order, slug, title, stage, summary, readTime, cheatSheet).
2. `content/modules/NN-slug.mdx` — write the content (`import { Callout } from "@/components/Callout";` at top, end with `## Checklist before you move to Module N+1`).
3. `app/modules/[slug]/page.tsx` — import the new mdx file and add it to the `content` map.

If inserting a module in the middle (not at the end), other modules renumber. Run `grep -n "Module [0-9]" content/modules/*.mdx` afterward and fix every cross-reference (checklist headings, "more in Module N" asides) — easy to miss one.

## Voice

Direct, concrete, no em dashes, no AI-vocabulary words (delve, crucial, robust, comprehensive, nuanced, foster, showcase...), short paragraphs. Business/strategy audience, not engineers. Worked examples must be clearly-labeled fictional/composite scenarios — never presented as real companies. Real named companies only belong in the case library, with real citations.

## Deploying

Push to `main` → GitHub Actions builds and deploys automatically to https://rzeng0812.github.io/agentic-ops/. No manual step.

- Local dev: `npm run dev` (runs at root, no base path).
- To test the actual static export locally: `GITHUB_PAGES=true npm run build`, output lands in `out/`.

## Maintenance

Several of the 2026 adoption/governance stats cited in Modules 4 and 6 will age. Worth a periodic pass (every few months) re-searching those numbers and updating the sourced Callouts and case entries if they've moved.
