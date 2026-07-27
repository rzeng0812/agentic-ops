export type Term = {
  term: string;
  definition: string;
  example?: string;
  related?: string[];
};

export const glossary: Term[] = [
  {
    term: "Agent",
    definition:
      "A system that combines a language model with tools it can call and a loop that lets it decide what step to take next, rather than producing one fixed response. The defining feature is that it can take actions, not just generate text.",
    example:
      "We're piloting an agent that reads incoming vendor invoices, checks them against the PO system, and flags anything that doesn't match.",
    related: ["Tool use", "Orchestration", "Autonomy level"],
  },
  {
    term: "Tool use",
    definition:
      "The mechanism by which an agent calls out to external functions, APIs, or systems — querying a database, sending an email, updating a record — instead of only producing text output.",
    example:
      "Once we wired up tool use for the CRM, the agent could actually update the deal stage instead of just telling a rep what to change.",
    related: ["Agent", "Integration"],
  },
  {
    term: "Orchestration",
    definition:
      "How multiple agents or multi-step processes hand work off to each other. More orchestration generally means more capability, but also more failure surface and more places for errors to compound.",
    example:
      "The orchestration layer routes each support ticket to a triage agent first, then hands billing questions off to a separate finance agent.",
    related: ["Agent", "Multi-agent system"],
  },
  {
    term: "Multi-agent system",
    definition:
      "An architecture where multiple specialized agents (e.g., one for research, one for drafting, one for approval) coordinate on a task instead of one general-purpose agent doing everything.",
    example:
      "Instead of one bot handling the whole RFP response, we split it into a multi-agent system: one drafts, one checks pricing, one reviews compliance language.",
    related: ["Orchestration"],
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique where the model retrieves relevant information from a knowledge base before generating a response, used to ground answers in your actual business data instead of the model's training data alone. Output quality is bottlenecked by the quality of what it retrieves.",
    example:
      "We added RAG over the policy wiki so the support agent quotes our actual return window instead of guessing at a generic 30-day rule.",
    related: ["Data readiness", "Knowledge base"],
  },
  {
    term: "Autonomy level",
    definition:
      "How much an agent is allowed to do without a human in the loop — ranging from suggest-only, to act-with-approval, to fully autonomous. This should be a deliberate governance decision, not a default setting.",
    example:
      "We started the autonomy level at suggest-only for three months before letting the agent send emails without review.",
    related: ["Governance", "Human-in-the-loop"],
  },
  {
    term: "Human-in-the-loop",
    definition:
      "A checkpoint where a person must review or approve an agent's action before it takes effect. Common for high-stakes or irreversible actions during early deployment.",
    example:
      "Any wire transfer over $10,000 still requires human-in-the-loop approval, no matter how confident the agent's recommendation is.",
    related: ["Autonomy level", "Governance"],
  },
  {
    term: "Guardrails",
    definition:
      "Constraints placed on an agent's behavior — what it's allowed to say, do, or access — enforced through prompting, permissions, or a policy layer, independent of the model's own judgment.",
    example:
      "The team added a guardrail that blocks the agent from issuing any refund over $500 without human sign-off.",
    related: ["Governance", "Permission ceiling"],
  },
  {
    term: "Permission ceiling",
    definition:
      "The maximum set of actions and data an agent is allowed to access, set deliberately in advance rather than left at 'whatever the underlying credentials allow.'",
    example:
      "Security pushed back on the procurement agent's permission ceiling because it could technically read every employee's salary data, not just vendor records.",
    related: ["Guardrails", "Governance"],
  },
  {
    term: "Agent sprawl",
    definition:
      "The uncontrolled proliferation of agents built independently across teams without central visibility or governance, cited by 94% of enterprises as a rising security and operational risk in 2026.",
    example:
      "By the time IT ran an audit, they found 40 agents built by different teams that nobody in security had approved — classic agent sprawl.",
    related: ["Governance", "Shadow AI"],
  },
  {
    term: "Shadow AI",
    definition:
      "AI agents or workflows running in an organization that the security or governance team doesn't know exist — reported by 82% of enterprises as already present in their environment.",
    example:
      "Turns out marketing had been feeding customer emails into a personal ChatGPT account for months — nobody flagged it as shadow AI until the vendor security review.",
    related: ["Agent sprawl", "Governance"],
  },
  {
    term: "Audit trail",
    definition:
      "A chronological, tamper-resistant record of every input, tool call, permission used, policy decision, and reasoning step an agent took — the core artifact that makes an agent's behavior reviewable after the fact.",
    example:
      "When the customer disputed the automated credit, we pulled the audit trail and could see exactly which data the agent used to make the call.",
    related: ["Governance", "Agent identity"],
  },
  {
    term: "Agent identity",
    definition:
      "A verifiable record of which agent (and which version) performed an action, and under whose authorization — the accountability equivalent of a user login for autonomous systems.",
    example:
      "We gave the invoicing agent its own agent identity so we could tell at a glance it made the change, not a person logged in as the service account.",
    related: ["Audit trail", "Governance"],
  },
  {
    term: "Demo theater",
    definition:
      "A pilot or prototype that performs well in a controlled demonstration but was never tested against real, messy production conditions — the leading reason pilots stall before reaching measurable value.",
    example:
      "The demo looked great with ten clean sample tickets, but the moment we ran it on real inbox chaos it fell apart — pure demo theater.",
    related: ["Pilot", "P&L impact"],
  },
  {
    term: "P&L impact",
    definition:
      "Whether an initiative can be tied to a measurable line on the profit-and-loss statement — cost reduction, time saved, revenue, or error rate — as opposed to activity metrics like 'the agent was used.'",
    example:
      "Before we renew the contract, finance wants a clear P&L impact number, not just a slide saying adoption is up 30%.",
    related: ["Measuring impact", "Demo theater"],
  },
  {
    term: "Data readiness",
    definition:
      "Whether an organization's underlying data (structure, consistency, freshness, access) is good enough to support an agent reliably. A common, quiet cause of agents failing in production despite working in testing.",
    example:
      "The pilot stalled for six weeks not because of the model, but because our data readiness was so bad three systems had conflicting customer addresses.",
    related: ["RAG (Retrieval-Augmented Generation)", "Integration"],
  },
];

export const orderedGlossary = glossary
  .slice()
  .sort((a, b) => a.term.localeCompare(b.term));
