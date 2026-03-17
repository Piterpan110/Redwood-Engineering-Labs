import ScrollReveal from "./ScrollReveal";
import { UserCheck, FileSearch, Send, Mic, Rocket, Layers } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Deep Profile Analysis",
    desc: "We start by deeply understanding your technical background, experience level, preferred technologies, and target role types. Every strategy is built around you.",
  },
  {
    icon: FileSearch,
    title: "Tailored Materials",
    desc: "Using our AI tools and senior engineer input, we build tailored resume versions and application materials matched precisely to the opportunities we target.",
  },
  {
    icon: Send,
    title: "Research, Apply & Coordinate",
    desc: "We identify the right roles, handle all application submissions, and coordinate scheduling with employers — always around your availability, always with your approval.",
  },
  {
    icon: Mic,
    title: "Supported Interviews",
    desc: "You participate in interviews as yourself — supported by our team in real time across every stage: HR screenings, technical interviews, live coding, take-homes, culture fits, and finals.",
  },
  {
    icon: Rocket,
    title: "Post-Hire Support",
    desc: "Once hired, a dedicated senior engineer continues working alongside you behind the scenes — handling technical delivery, managing communications, and ensuring long-term success.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            The Process
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            From Profile to Paycheck — Step by Step
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every step is designed to maximize your chances and minimize your effort. Here's exactly how it works.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`glass-card card-hover rounded-2xl p-8 ${i % 2 === 1 ? "md:ml-auto" : ""} max-w-lg`}>
                      <div className={`mb-4 flex items-center gap-3 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <step.icon size={20} className="text-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</span>
                      </div>
                      <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background md:block" />

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Multiple Roles Callout */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 rounded-2xl border border-primary/20 bg-primary/5 p-10 md:p-14">
            <div className="flex items-start gap-5">
              <div className="hidden shrink-0 rounded-2xl bg-primary/10 p-4 md:block">
                <Layers size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                  How Members Handle Multiple Roles
                </h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  This is one of the most unique parts of our model. No engineer can genuinely handle multiple senior roles alone — and our members don't have to.
                </p>
                <p className="mb-4 text-secondary-foreground leading-relaxed">
                  <strong className="text-foreground">Your first role:</strong> You handle it fully yourself — doing the actual engineering work, showing up to everything, fully engaged.
                </p>
                <p className="mb-4 text-secondary-foreground leading-relaxed">
                  <strong className="text-foreground">Every additional role:</strong> The technical work and all written communications are handed entirely to Redwood's support team. You simply attend mandatory team meetings and maintain the client relationship. For each additional role, you receive <span className="font-semibold text-primary">50% of the full salary</span> — without carrying the full technical workload.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is team policy — not a suggestion. It's how the model is designed to work, and it's what allows you to earn from multiple high-paying senior positions without burning out. Members who were most anxious about this at the start consistently find it the most manageable once the system kicks in around them.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
