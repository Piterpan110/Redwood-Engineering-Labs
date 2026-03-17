import ScrollReveal from "./ScrollReveal";
import { Target, Ban, Handshake } from "lucide-react";

const WhoWeAre = () => {
  const points = [
    { icon: Target, title: "What We Are", desc: "A private, structured remote engineering network. We bring interviews, support, and technical teams to exceptional developers — helping them land and manage multiple senior roles simultaneously." },
    { icon: Ban, title: "What We Are Not", desc: "We are not a recruiter, not a staffing agency, and not a job board. We are an engineering team that operates entirely behind the scenes under your identity." },
    { icon: Handshake, title: "How We Operate", desc: "Every application, every communication, and every interview is conducted under your real name and real profile. We work alongside you — never in front of you." },
  ];

  return (
    <section id="who-we-are" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            A Different Kind of Engineering Network
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Redwood Engineering Labs was built on a simple premise: senior engineers deserve better than grinding through hiring alone, limited to a single income stream.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.15}>
              <div className="glass-card card-hover rounded-2xl p-8 h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <point.icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{point.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16">
            <p className="highlight-quote max-w-3xl">
              "We exist so that exceptional engineers never have to navigate the hiring process alone — and never have to settle for just one opportunity."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoWeAre;
