export type CaseStudy = {
  title: string;
  org: string;
  industry: string;
  function: string;
  stage: string;
  summary: string;
  result: string;
  depth?: string;
  sourceUrl: string;
  sourceName: string;
};

export const cases: CaseStudy[] = [
  {
    title: "Cutting resolution time with an AI support agent",
    org: "Lyft",
    industry: "Transportation",
    function: "Customer Service",
    stage: "Scale",
    summary:
      "Lyft partnered with the AWS Generative AI Innovation Center to build a conversational 'intent agent' and deployed it into its existing driver and rider support flow rather than standing up a separate chatbot product.",
    result:
      "Average resolution time dropped 87%, and more than half of customer and driver support requests are now resolved in under three minutes, with the agent available 24/7 in English and Spanish.",
    depth:
      "Before the agent, growth and support cost moved in lockstep — more rides meant longer queues. Lyft VP Ameena Gill described the old flow as leaving 'drivers waiting for help on issues affecting their livelihood, while riders weren't getting the fast, personalized support they deserved.' Rather than a menu-driven bot, the intent agent uses natural dialogue, pulls in ride history and account status for context, asks clarifying questions across multi-turn exchanges, and decides whether to resolve an issue itself or route it to a human. The rollout reframed human agents as specialists for complex, empathy-heavy cases rather than first responders for routine ones.",
    sourceUrl: "https://www.customerexperiencedive.com/news/lyfts-agentic-ai-resolution-times/806558/",
    sourceName: "Customer Experience Dive — Lyft's agentic AI cuts resolution times, adds 24/7 support",
  },
  {
    title: "Julie, the virtual assistant handling millions of rider questions",
    org: "Amtrak",
    industry: "Transportation",
    function: "Customer Service",
    stage: "Scale",
    summary:
      "Amtrak's 'Ask Julie' web assistant, built by Next IT and live since October 2012, extended the older telephone voice system 'Julie' (used on 1-800-USA-RAIL for over a decade) onto Amtrak.com, scoped narrowly to booking, schedules, and travel questions rather than a general-purpose bot.",
    result:
      "Julie answers over 5 million questions a year, and Verint — which acquired Next IT in December 2017 and now operates the platform — reports an 8x return on the underlying chatbot investment, a 32% increase in self-service containment, and bookings made through Julie generating 30% more revenue than bookings made through other channels.",
    depth:
      "Next IT, a Spokane-based conversational-AI company founded in 2002, built the original 'Julie' voice system for Amtrak's phone line and later extended it into the 'Ask Julie' web assistant in 2012 — years before most companies had any web chatbot. Verint acquired Next IT in December 2017 for roughly $30 million upfront (up to $51 million with performance-based payments) specifically to add conversational AI and intelligent virtual assistant capabilities to its self-service portfolio, and continued developing Julie under the Verint brand. The assistant answers questions in natural language, prefills booking forms, and can simultaneously handle an unlimited number of concurrent website visitors — a scale advantage over live agents that Amtrak leaned on to reduce contact-center call volume and handle times.",
    sourceUrl: "https://www.verint.com/case-studies/helping-a-railroad-conduct-business/",
    sourceName: "Verint — Helping a Railroad Conduct Business (Amtrak case study)",
  },
  {
    title: "Autonomous resolution for a finance app's support queue",
    org: "Emma (finance app), agent built by Hugo",
    industry: "Fintech",
    function: "Finance Operations",
    stage: "Pilot",
    summary:
      "Emma's support team was handling all incoming conversations manually. Hugo, a standalone AI agent that connects to business systems via the Model Context Protocol instead of locking customers into a helpdesk platform, took over incoming conversations and began autonomously resolving queries using real-time data pulled from Emma's integrated systems.",
    result:
      "Per Emma's Head of Operations Geoffrey Safar: 'Hugo now handles all incoming conversations and resolves approximately 40% of queries autonomously,' freeing the support team to focus on complex cases instead of routine ones.",
    depth:
      "Hugo's pitch is that it doesn't require migrating off an existing helpdesk — it syncs directly with helpdesks, knowledge bases, and CRM systems via MCP to keep its answers current, and escalates anything it can't resolve to a human with full conversation context so customers don't have to repeat themselves. Across its customer base generally (not Emma-specific), Hugo reports automating 40-60% of incoming requests end-to-end; Emma's reported 40% autonomous-resolution rate sits at the lower end of that range.",
    sourceUrl: "https://hugo.ai/en/",
    sourceName: "Hugo — customer case study and testimonial (Geoffrey Safar, Head of Operations, Emma)",
  },
  {
    title: "Why 95% of integrated pilots show no P&L impact",
    org: "Aggregate enterprise data, 2026",
    industry: "Cross-industry",
    function: "Strategy / Operations",
    stage: "Pilot",
    summary:
      "Analysis of enterprise AI pilots found the dominant failure pattern wasn't model quality — it was treating AI deployment as a technology project instead of a workflow change, with no owner accountable for production adoption.",
    result:
      "The pilots that did show P&L impact had a named business owner, a pre-defined success metric, and integration into an existing (not synthetic) workflow.",
    sourceUrl: "https://writer.com/blog/enterprise-ai-adoption-2026/",
    sourceName: "WRITER — Enterprise AI Adoption in 2026",
  },
  {
    title: "Agent sprawl as the dominant 2026 enterprise AI risk",
    org: "Aggregate enterprise data, 2026",
    industry: "Cross-industry",
    function: "Governance / Security",
    stage: "Govern",
    summary:
      "94% of enterprises report AI agent sprawl — agents built independently across teams and frameworks — as a rising security and operational risk, and 82% already have agents or workflows their security team didn't know existed.",
    result:
      "Only 21% of organizations report a mature governance model, despite 74% planning agentic AI adoption within two years — the gap between adoption speed and governance maturity is the headline risk of the period.",
    sourceUrl: "https://zylos.ai/research/2026-05-01-ai-agent-governance-compliance-2026/",
    sourceName: "Zylos Research — AI Agent Governance and Compliance in 2026",
  },
  {
    title: "First comprehensive agentic AI governance framework",
    org: "Singapore IMDA",
    industry: "Public Sector / Regulatory",
    function: "Governance",
    stage: "Govern",
    summary:
      "Singapore's IMDA launched the Model AI Governance Framework for Agentic AI (MGF) at the World Economic Forum in January 2026 — positioned as the first governance framework built specifically for agents that plan, reason, and act autonomously, rather than for generative AI outputs alone.",
    result:
      "The framework organizes obligations around four dimensions: assessing and bounding agent risk upfront, making a human accountable across the agent's lifecycle (with the ability to override, intercept, or review agent actions), embedding technical controls (design guardrails, pre-deployment testing, staged rollouts, real-time monitoring), and ensuring end users know they're dealing with an agent and have an escalation path.",
    depth:
      "The MGF was published for public consultation in January 2026, then updated on May 20, 2026 to incorporate industry feedback along with real-world case studies covering multi-agent systems, third-party agents, and automation bias — failure modes that mostly surface only after agents are actually deployed. Rather than mandating one technical mechanism, it asks organizations to calibrate controls to each agent's specific risk profile — how error-tolerant the domain is, how sensitive the data it touches is, how reversible its actions are, and how complex its tasks are — and then restrict tool and data access to the minimum the agent needs to do its job.",
    sourceUrl: "https://www.bakermckenzie.com/en/insight/publications/2026/01/singapore-governance-framework-for-agentic-ai-launched",
    sourceName: "Baker McKenzie — Singapore: Governance Framework for Agentic AI Launched",
  },
  {
    title: "COIN: turning 360,000 lawyer-hours into seconds",
    org: "JPMorgan Chase",
    industry: "Financial Services",
    function: "Legal / Contract Review",
    stage: "Scale",
    summary:
      "Commercial loan agreements were reviewed line-by-line by in-house lawyers and loan officers. JPMorgan built COIN (Contract Intelligence), a machine-learning system trained to extract clauses and terms from loan documents, and took it live in 2016.",
    result:
      "COIN reviews roughly 12,000 new commercial credit agreements a year in seconds, work that Bloomberg reported previously consumed about 360,000 hours annually of lawyer and loan-officer time — while also reducing loan-servicing mistakes tied to human interpretation errors.",
    depth:
      "Before COIN, interpreting commercial loan agreements was a purely manual, repetitive task assigned to lawyers and loan officers every time a new agreement came in. It was one of the earliest large-bank bets on machine learning (rather than rules-based automation) applied to legal documents, and JPMorgan said at the time it planned to extend the same approach to other document-heavy legal work, including credit-default swaps and custody agreements. Nearly a decade later, COIN is still cited in 2026 roundups of agentic AI deployments as an early example of a document-processing agent delivering measurable, auditable time savings rather than just incremental accuracy gains.",
    sourceUrl: "https://www.abajournal.com/news/article/jpmorgan_chase_uses_tech_to_save_360000_hours_of_annual_work_by_lawyers_and",
    sourceName: "ABA Journal — JPMorgan Chase uses tech to save 360,000 hours of annual work by lawyers",
  },
  {
    title: "Compressing a four-month hiring cycle into four weeks",
    org: "Unilever",
    industry: "Consumer Goods",
    function: "HR / Recruiting",
    stage: "Scale",
    summary:
      "Unilever's early-career hiring pipeline processed up to 1.8 million applications a year through manual CV screening and in-person interviews, taking up to four months per hire. A 2016 pilot for its Future Leaders Programme layered in AI-driven screening, gamified assessments, and automated video-interview analysis ahead of any human interview.",
    result:
      "Time-to-hire dropped roughly 90%, from about four months to about four weeks; Unilever reports saving around 50,000 recruiter hours and roughly £1 million a year, alongside a 16% increase in hire diversity.",
    depth:
      "The pilot started with about 250,000 applicants to the 2016 US Future Leaders Programme, expanded to all entry-level global hires in 2018, and reached a full rollout across 70+ countries by 2020. Candidates now move through three automated stages — anonymized CV screening, roughly a dozen short cognitive and behavioral games built with Pymetrics, and AI-scored video interviews via HireVue — before any human recruiter sees them, cutting the pool that reaches Unilever's in-person 'Discovery Centres' by about 90%. Unilever paired the rollout with explicit bias-mitigation work — training the assessment games on a dataset of 100,000+ past hires and running third-party algorithmic audits — responding to the well-documented industry concern that AI screening tools can encode historical hiring bias.",
    sourceUrl: "https://reruption.com/en/knowledge/industry-cases/unilevers-ai-hiring-90-faster-16-more-diverse",
    sourceName: "Reruption — Unilever's AI Hiring: 90% Faster, 16% More Diverse",
  },
  {
    title: "Cutting prior-authorization delays with a clinician-reviewed AI agent",
    org: "PrescriberPoint",
    industry: "Healthcare",
    function: "Healthcare Administration",
    stage: "Pilot",
    summary:
      "Prior authorization is a major administrative bottleneck in U.S. healthcare — an AMA physician survey found 93% of physicians report care delays tied to PA requirements. PrescriberPoint rolled out an AI agent in April 2026 that drafts prior-authorization submissions directly from EHR and clinical documentation, routing every draft through a clinician for review before it reaches the payer.",
    result:
      "94.5% of the agent's drafted submissions were accepted by clinicians without extensive revision, and time-to-therapy-initiation fell to as little as 48 hours for some specialty treatments in oncology and neurology.",
    depth:
      "The rollout deliberately kept a human in the loop by design: the agent drafts the submission, but a clinician must review and approve it before anything goes to the payer, rather than letting the system submit autonomously. That constraint targets the accuracy and liability concerns that have slowed AI adoption in higher-stakes healthcare decisions specifically — the goal being to prove the agent's drafts are usable, not just fast, before extending its autonomy further.",
    sourceUrl: "https://www.2minutemedicine.com/prescriberpoint-ai-agent-automates-prior-authorization-with-94-5-acceptance/",
    sourceName: "2 Minute Medicine — PrescriberPoint AI agent automates prior authorization with 94.5% acceptance",
  },
];

export const industries = Array.from(new Set(cases.map((c) => c.industry))).sort();
export const functions = Array.from(new Set(cases.map((c) => c.function))).sort();
export const stages = Array.from(new Set(cases.map((c) => c.stage)));
