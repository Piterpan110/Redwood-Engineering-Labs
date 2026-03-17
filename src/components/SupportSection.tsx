import ScrollReveal from "./ScrollReveal";
import { Bot, Users, FileText, Target, MessageSquare, BarChart3 } from "lucide-react";

const SupportSection = () => {
  return (
    <section id="support" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            How We Support You
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Two Pillars. One Unstoppable System.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our support system was built and refined over more than a year of research and real-world testing. It combines cutting-edge AI with deeply experienced humans — working together to give you every possible advantage.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* AI Pillar */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-2xl p-10 h-full">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Bot size={28} className="text-primary" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
                Proprietary AI Tools
              </h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Purpose-built in-house, not off-the-shelf. Every tool is designed specifically for the engineering hiring process.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FileText, label: "Resume & profile optimization tailored to each target role" },
                  { icon: Target, label: "Intelligent job matching and application targeting" },
                  { icon: MessageSquare, label: "Interview preparation and real-time technical support" },
                  { icon: BarChart3, label: "Performance analytics and role management tooling" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-secondary-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Human Pillar */}
          <ScrollReveal direction="right">
            <div className="glass-card rounded-2xl p-10 h-full">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <Users size={28} className="text-accent" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
                Dedicated Human Support
              </h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Every member gets their own team — real people who know your background, your goals, and your roles inside and out.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, label: "A senior software engineer assigned personally to you" },
                  { icon: Target, label: "An expert hiring manager guiding every application and interview" },
                  { icon: MessageSquare, label: "Real-time support across every interview stage — HR to final round" },
                  { icon: BarChart3, label: "Ongoing technical delivery and role management after you're hired" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm text-secondary-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
