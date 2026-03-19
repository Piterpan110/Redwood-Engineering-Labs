import { motion, useScroll, useTransform } from "framer-motion";
import { UserCheck, FileSearch, Send, Mic, Rocket, Layers } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: UserCheck,
    title: "Deep Profile Analysis",
    desc: "We deeply understand your technical background, experience level, preferred technologies, and target role types. Every strategy is built around you.",
    accent: "from-primary to-accent",
  },
  {
    icon: FileSearch,
    title: "Tailored Materials",
    desc: "Using our AI tools and senior engineer input, we build tailored resume versions and application materials matched precisely to the opportunities we target.",
    accent: "from-accent to-primary",
  },
  {
    icon: Send,
    title: "Research, Apply & Coordinate",
    desc: "We identify the right roles, handle all application submissions, and coordinate scheduling with employers — always around your availability.",
    accent: "from-primary to-accent",
  },
  {
    icon: Mic,
    title: "Supported Interviews",
    desc: "You participate in interviews as yourself — supported by our team in real time across every stage: HR screenings, technical interviews, live coding, and finals.",
    accent: "from-accent to-primary",
  },
  {
    icon: Rocket,
    title: "Post-Hire Support",
    desc: "Once hired, a dedicated senior engineer continues working alongside you — handling technical delivery, managing communications, and ensuring long-term success.",
    accent: "from-primary to-accent",
  },
];

const TimelineStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.6]);

  const isEven = index % 2 === 0;

  return (
    <motion.div ref={ref} className="relative flex items-center md:items-start" style={{ opacity }}>
      {/* Desktop layout */}
      <div className={`hidden w-full md:grid md:grid-cols-[1fr_80px_1fr] md:items-start`}>
        {/* Left content */}
        <div className={`flex ${isEven ? "justify-end pr-10" : ""}`}>
          {isEven && (
            <motion.div style={{ scale }} className="max-w-md">
              <StepCard step={step} index={index} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center timeline node */}
        <div className="relative flex flex-col items-center">
          <motion.div className="relative z-10 flex h-14 w-14 items-center justify-center" style={{ scale: dotScale }}>
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
              style={{ opacity: glowOpacity, filter: "blur(8px)" }}
            />
            {/* Solid circle */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/50 bg-background">
              <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-lg font-bold text-transparent">
                {index + 1}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right content */}
        <div className={`flex ${!isEven ? "pl-10" : ""}`}>
          {!isEven && (
            <motion.div style={{ scale }} className="max-w-md">
              <StepCard step={step} index={index} align="left" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex w-full gap-5 md:hidden">
        <div className="relative flex flex-col items-center">
          <motion.div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center" style={{ scale: dotScale }}>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
              style={{ opacity: glowOpacity, filter: "blur(6px)" }}
            />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/50 bg-background">
              <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-sm font-bold text-transparent">
                {index + 1}
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div style={{ scale }} className="flex-1 pb-2">
          <StepCard step={step} index={index} align="left" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const StepCard = ({ step, index, align }: { step: typeof steps[0]; index: number; align: "left" | "right" }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-7 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_-12px_hsl(12_55%_50%/0.2)]">
    {/* Subtle gradient accent bar */}
    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.accent} opacity-50 transition-opacity duration-500 group-hover:opacity-100`} />

    <div className={`mb-4 flex items-center gap-3 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10"
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <step.icon size={20} className="text-primary" />
      </motion.div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">Step {index + 1}</span>
    </div>
    <h3 className={`mb-2 font-display text-xl font-semibold text-foreground ${align === "right" ? "md:text-right" : ""}`}>
      {step.title}
    </h3>
    <p className={`text-sm leading-relaxed text-muted-foreground ${align === "right" ? "md:text-right" : ""}`}>
      {step.desc}
    </p>
  </div>
);

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            The Process
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            From Profile to Paycheck — Step by Step
          </h2>
          <p className="mb-20 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every step is designed to maximize your chances and minimize your effort. Here's exactly how it works.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line — desktop */}
          <div className="absolute left-[39px] top-0 hidden h-full w-px md:left-1/2 md:-translate-x-px md:block">
            <div className="h-full w-full bg-border/30" />
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-accent to-primary/20"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Animated vertical line — mobile */}
          <div className="absolute left-[21px] top-0 h-full w-px md:hidden">
            <div className="h-full w-full bg-border/30" />
            <motion.div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-accent to-primary/20"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <TimelineStep key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Multiple Roles Callout */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-10 md:p-14">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative flex items-start gap-5 mb-10">
              <motion.div
                className="hidden shrink-0 rounded-2xl bg-primary/10 p-4 md:block"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Layers size={32} className="text-primary" />
              </motion.div>
              <div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                  How Members Handle Multiple Roles
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  This is one of the most unique parts of our model. No engineer can genuinely handle multiple senior roles alone — and our members don't have to.
                </p>
              </div>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { emoji: "🤝", title: "Team-Powered Delivery", text: "The technical work and all written communications are handed entirely to Redwood's support team." },
                { emoji: "📅", title: "You Show Up, We Handle the Rest", text: "You simply attend mandatory team meetings and maintain the client relationship." },
                { emoji: "💰", title: "50% Per Additional Role", text: "For each additional role, you receive 50% of the full salary — without carrying the full technical workload." },
                { emoji: "⚙️", title: "Zero Stress, Well-Oiled System", text: "Our support team is incredibly experienced at managing this. We provide the most optimized and convenient work setup for every member." },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="glass-card rounded-xl p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.15)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="mb-3 block text-2xl">{card.emoji}</span>
                  <h4 className="mb-2 font-display text-base font-semibold text-foreground">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="relative mt-8 text-center text-sm text-muted-foreground italic max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              This is team policy — not a suggestion. Members who were most anxious about this at the start consistently find it the most manageable once the system kicks in.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
