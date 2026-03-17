import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Lock, DollarSign, LogOut } from "lucide-react";

const terms = [
  {
    icon: CheckCircle2,
    title: "Eligibility & Conduct",
    items: [
      "Based in the US, Canada, or Australia",
      "Solid technical background with real engineering experience",
      "Professional conduct and reliability in all engagements",
      "Commitment to the team system and communication standards",
    ],
  },
  {
    icon: Lock,
    title: "Confidentiality",
    items: [
      "All operations, tools, and team structures are strictly confidential",
      "Members sign an NDA before onboarding",
      "No disclosure of Redwood's involvement to client companies",
      "Mutual respect for proprietary systems and processes",
    ],
  },
  {
    icon: DollarSign,
    title: "Compensation Terms",
    items: [
      "First role: 100% retained by the member",
      "Additional roles: 50/50 revenue split",
      "No upfront fees or hidden costs",
      "All terms documented in written agreement",
    ],
  },
  {
    icon: LogOut,
    title: "Leaving the Network",
    items: [
      "Members may leave at any time with reasonable notice",
      "Active role obligations must be properly transitioned",
      "Confidentiality obligations remain in effect after departure",
      "Clean, professional exit process for all parties",
    ],
  },
];

const PartnerTerms = () => {
  return (
    <section className="section-dark py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Partner Terms
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Clear Terms. No Surprises.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything is documented, transparent, and designed to protect everyone involved.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((term, i) => (
            <ScrollReveal key={term.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="mb-4 flex items-center gap-3">
                  <term.icon size={22} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{term.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {term.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTerms;
