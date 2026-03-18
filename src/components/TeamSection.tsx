import { motion } from "framer-motion";
import { Globe, Code2, Briefcase, HeadphonesIcon } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const TeamSection = () => {
  return (
    <section id="team" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Our Team
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            A Global Team Built with Purpose
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We have team members across the US, Canada, Australia, Ukraine, and India — and each side plays a distinct, essential role.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { value: 5, suffix: "+", label: "Countries" },
            { value: 10, suffix: "+", label: "Years Avg. Experience" },
            { value: 24, suffix: "/7", label: "Coverage" },
            { value: 100, suffix: "%", label: "Remote" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="stat-number text-3xl md:text-4xl" duration={1.5} />
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Support Team */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="group"
          >
            <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_50px_-15px_hsl(12_55%_50%/0.2)]">
              <div className="mb-2 flex items-center gap-3">
                <HeadphonesIcon size={24} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Behind the Scenes</span>
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">Support Team</h3>
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Globe size={14} className="text-primary" /> Ukraine & India
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Senior engineers, hiring managers, and virtual assistants — all with <span className="text-foreground font-medium">10+ years of industry experience</span>. They handle job applications, interview coordination, technical interview support, and all technical work on the roles our members land.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Code2, label: "Highly experienced senior software engineers" },
                  { icon: Briefcase, label: "Expert hiring managers with deep market knowledge" },
                  { icon: HeadphonesIcon, label: "Dedicated virtual assistants for coordination" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }}>
                      <item.icon size={16} className="text-primary" />
                    </motion.div>
                    <span className="text-sm text-secondary-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Front-facing */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group"
          >
            <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_50px_-15px_hsl(35_80%_55%/0.2)]">
              <div className="mb-2 flex items-center gap-3">
                <Globe size={24} className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Front-Facing</span>
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground">Network Members</h3>
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Globe size={14} className="text-accent" /> US, Canada & Australia
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                The front-facing members are the ones who go through the hiring process, build the relationship with the client company, and are the face of every engagement. They bring what the support team cannot: <span className="text-foreground font-medium">local presence, cultural fit, and the candidate profile</span> these companies are hiring for.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                That is the part only they can play.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Transparency note */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20">
            <h4 className="mb-3 font-display text-lg font-semibold text-foreground">Why This Structure Works</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The salary difference between Ukraine/India and the US/Canada/Australia is significant — even for the same skill and experience level. We offer our support team highly competitive, above-market compensation for their location. They are genuinely well-paid, motivated, and invested in every member's success. This geographic structure is what makes the model financially sustainable and beneficial for everyone involved — a deliberate, transparent, and fair decision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
