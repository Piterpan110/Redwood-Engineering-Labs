import ScrollReveal from "./ScrollReveal";
import { DollarSign, FileCheck, TrendingUp, Ban } from "lucide-react";

const CompensationSection = () => {
  return (
    <section id="compensation" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Compensation
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Shared Success. Real Numbers.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our model is built entirely on shared success. We only earn when you earn. No hidden fees, no upfront costs — just results.
          </p>
        </ScrollReveal>

        {/* Big stat */}
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="stat-number mb-2">50 / 50</div>
            <p className="text-lg text-muted-foreground">Revenue split between you and Redwood</p>
          </div>
        </ScrollReveal>

        {/* Example cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {[
            { salary: "$150K", yours: "$75K", label: "Per additional role" },
            { salary: "$180K", yours: "$90K", label: "Per additional role" },
            { salary: "$200K", yours: "$100K", label: "Per additional role" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card card-hover rounded-2xl p-8 text-center">
                <p className="mb-1 text-sm text-muted-foreground">{item.label}</p>
                <p className="font-display text-lg text-muted-foreground">{item.salary} salary</p>
                <p className="stat-number mt-2 text-4xl">{item.yours}</p>
                <p className="mt-1 text-sm text-muted-foreground">Your annual take</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mb-12 text-center text-muted-foreground max-w-lg mx-auto">
            Remember — your first role, you keep <span className="text-foreground font-semibold">100%</span>. The 50/50 split applies only to additional roles managed by our team. There is no cap on how many roles you can hold.
          </p>
        </ScrollReveal>

        {/* Key points */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Ban, title: "Zero Upfront Fees", desc: "Nothing to pay. Ever. We invest in you first." },
            { icon: FileCheck, title: "Written Agreement", desc: "All terms defined clearly in writing before any engagement begins." },
            { icon: TrendingUp, title: "Unlimited Potential", desc: "No cap on roles or earnings. The more you grow, the more you earn." },
            { icon: DollarSign, title: "You Handle Taxes", desc: "Members handle their own tax obligations. Simple and transparent." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card card-hover rounded-2xl p-6 h-full">
                <item.icon size={22} className="mb-3 text-primary" />
                <h4 className="mb-2 font-display text-base font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompensationSection;
