import ScrollReveal from "./ScrollReveal";
import { Flame, Brain, Rocket, Users } from "lucide-react";

const WhoWereLookingFor = () => {
  return (
    <section id="join" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Who We're Looking For
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Not Just Experience. The Right Engineer.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We don't simply chase years of experience. We look for a specific combination — and if you're reading this far, chances are you already have it.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Brain, title: "Solid Technical Foundations", desc: "Real hands-on experience building and shipping software. You know your craft." },
            { icon: Flame, title: "Genuinely Ambitious", desc: "You're driven, hungry, and ready to operate at a senior level — whether you have 3 years or 15." },
            { icon: Rocket, title: "Ready for the Next Step", desc: "Engineers with decades of experience are often settled. Redwood is for those who want to push forward." },
            { icon: Users, title: "Team-Oriented Mindset", desc: "You thrive in a structured system. You understand that every success strengthens the network." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card card-hover rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="highlight-quote mx-auto max-w-2xl text-center" style={{ borderLeft: "none", paddingLeft: 0 }}>
              "We are not building a massive agency. We are building a tight, high-caliber network where the quality of people and the quality of outcomes speaks for itself."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWereLookingFor;
