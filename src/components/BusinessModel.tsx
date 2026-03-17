import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Eye, EyeOff, Infinity, Zap, ShieldCheck } from "lucide-react";

const BusinessModel = () => {
  const cards = [
    { icon: TrendingUp, title: "The Problem", desc: "Senior remote roles pay exceptionally well — but the competition is brutal. Thousands of strong candidates fight for the same positions. Most go through it alone, limited to one role and one income." },
    { icon: Zap, title: "How Redwood Solves It", desc: "We apply to high-quality senior remote roles on your behalf, bring interviews directly to you, and support you in real time through every stage of the hiring process — HR screens to final rounds." },
    { icon: ShieldCheck, title: "What You Get", desc: "A dedicated senior engineer and expert hiring manager assigned personally to you. Proprietary AI tools. Real-time interview support. And a team that stays with you long after you're hired." },
    { icon: Infinity, title: "Unlimited Opportunity", desc: "There is no cap. You can land and manage multiple senior roles simultaneously — each one generating real income. The system is designed for it." },
    { icon: Eye, title: "Zero Disruption", desc: "If you have an existing role, nothing changes. Redwood operates entirely around your schedule, with your approval at every step. No risk, no disruption." },
    { icon: EyeOff, title: "Fully Behind the Scenes", desc: "Nobody will ever know we exist. We operate under your identity — your name, your profile, your brand. You are the engineer. We are the engine." },
  ];

  return (
    <section id="business-model" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Our Model
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Built for Engineers Who Want More
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Redwood isn't a side hustle or a gig platform. It's a structured engineering operation built to help you earn at the level you deserve — from multiple positions simultaneously.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="glass-card card-hover flex h-full flex-col rounded-2xl p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
