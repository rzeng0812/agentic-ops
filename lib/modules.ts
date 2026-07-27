export type Module = {
  slug: string;
  order: number;
  title: string;
  stage: string;
  summary: string;
  readTime: string;
  cheatSheet: string[];
};

export const modules: Module[] = [
  {
    slug: "problem-selection",
    order: 1,
    title: "Choosing the Right Problem",
    stage: "Select",
    summary:
      "Where AI agents actually pay off in a business, and the pattern-matching that tells you a process is a bad fit — including a worked example and when to just walk away.",
    readTime: "13 min",
    cheatSheet: [
      "Pick one process, not a platform. Scope to a single measurable workflow.",
      "Good fit: high volume, repeatable, rules exist but are tedious to apply, current cost is visible.",
      "Bad fit: low volume, judgment-heavy with no precedent, or the 'workaround' already works fine.",
      "If you can't name who owns the process today, you can't tell if the agent replaced them or just added noise.",
      "Write the success metric before you write the first prompt.",
      "Walk away if a simpler fix (rules-based automation, a form, a better default) solves 80% of the pain.",
    ],
  },
  {
    slug: "agent-fundamentals",
    order: 2,
    title: "Agent Architecture, for Non-Engineers",
    stage: "Understand",
    summary:
      "What an agent actually is at the business level — tool use, memory, orchestration — walked through against a real vendor pitch, so the vocabulary sticks.",
    readTime: "14 min",
    cheatSheet: [
      "An agent = a model + tools it can call + a loop that lets it decide what to do next.",
      "'Tool use' means the agent can take real actions (query a database, send an email, update a record), not just generate text.",
      "'Memory' is state carried across steps or sessions — ask vendors exactly what persists and where it's stored.",
      "'Orchestration' is how multiple agents or steps hand off work — more orchestration = more failure surface.",
      "The scarier failure mode isn't a wrong answer, it's a wrong action taken with real-world consequences.",
    ],
  },
  {
    slug: "build-buy-or-wait",
    order: 3,
    title: "Build, Buy, or Wait",
    stage: "Decide",
    summary:
      "What this actually costs — vendor pricing models, token costs, integration engineering time — and a real framework for deciding whether to build, buy, or hold off entirely.",
    readTime: "12 min",
    cheatSheet: [
      "Buy when the process is common across companies and a vendor has already solved your edge cases.",
      "Build when the process touches proprietary data or workflow that no vendor has seen before.",
      "Wait when the fit test from Module 1 is marginal — cost of waiting six months is usually lower than the cost of a bad deployment.",
      "Total cost = vendor/platform fee + integration engineering time + ongoing review/correction labor, not just the subscription price.",
      "Get a per-unit cost estimate (cost per resolved case) before committing, not just a monthly platform fee.",
    ],
  },
  {
    slug: "running-a-pilot",
    order: 4,
    title: "Running a Pilot That Proves Something",
    stage: "Pilot",
    summary:
      "How to scope a pilot that produces a real yes/no answer instead of a demo that impresses a room and then quietly dies — with a sample scorecard you can copy.",
    readTime: "13 min",
    cheatSheet: [
      "Define the metric and the threshold for success before the pilot starts, not after you see the results.",
      "Pilot against a real, current workflow — not a synthetic test case built to make the agent look good.",
      "Time-box it. If it hasn't produced a measurable signal in 6-8 weeks, that's information too.",
      "Track P&L-adjacent metrics (time saved, cost avoided, throughput), not just 'the model responded correctly.'",
      "Assign a single owner accountable for the pilot's outcome — not a committee.",
    ],
  },
  {
    slug: "integration",
    order: 5,
    title: "Integration: Making Agents Work With Real Systems",
    stage: "Integrate",
    summary:
      "The unglamorous work that determines whether a pilot survives contact with production — data access, workflow fit, and the systems the agent has to actually talk to.",
    readTime: "13 min",
    cheatSheet: [
      "An agent is only as good as the data it can see — inconsistent or stale source data breaks it silently.",
      "Map every system the agent needs to read from or write to before you scope the timeline.",
      "Decide up front what the agent can do autonomously vs. what needs a human approval step.",
      "Treat this as a workflow redesign project, not a software integration project.",
      "The org's capability to use the new workflow matters as much as the workflow itself.",
    ],
  },
  {
    slug: "governance",
    order: 6,
    title: "Governance, Risk, and Trust",
    stage: "Govern",
    summary:
      "Permissions, audit trails, and the accountability structure that keeps a small pilot from becoming an ungoverned mess — with a sample audit log entry and policy doc.",
    readTime: "15 min",
    cheatSheet: [
      "Every agent needs a verifiable identity: which agent, which version, acting under whose authorization.",
      "Log every action: tool invoked, permission used, policy decision, and the reasoning step before acting.",
      "Decide the permission ceiling before deployment — what the agent is allowed to touch, not what it's capable of touching.",
      "Assume agents will be built outside your visibility unless you give teams an approved, easy path to build them inside it.",
      "Governance maturity should scale ahead of adoption, not catch up after sprawl happens.",
    ],
  },
  {
    slug: "measuring-and-scaling",
    order: 7,
    title: "Measuring Impact and Scaling",
    stage: "Scale",
    summary:
      "Tying the pilot back to a real business number, and the difference between a pilot that scales and one that just gets a bigger demo.",
    readTime: "11 min",
    cheatSheet: [
      "If you can't tie the pilot to a P&L line (cost, revenue, time, error rate), it isn't ready to scale.",
      "Scaling a tool without scaling the team's capability to use it is the most common scaling mistake.",
      "Expand to adjacent processes with the same owner before expanding to new teams — depth before breadth.",
      "Re-run your governance checklist at every scale-up, not just at initial launch.",
      "Kill pilots that plateau. A pilot that never leaves 'promising' is a resourcing decision, not a technical one.",
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function getModuleBySlug(slug: string) {
  return modules.slice().sort((a, b) => a.order - b.order).find((m) => m.slug === slug);
}

export const orderedModules = modules.slice().sort((a, b) => a.order - b.order);
