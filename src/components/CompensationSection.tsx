import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { DollarSign, FileCheck, TrendingUp, Ban } from "lucide-react";
import TiltCard from "./TiltCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const CompensationSection = () => {
  return (
    <section id="compensation" className="section-dark py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Compensation
          </span>
          <h2 className="mb-6 max-w-2xl font-display text-4xl font-bold text-foreground md:text-5xl">
            Shared Success. Real Numbers.
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our model is built entirely on shared success. We only earn when you earn. No hidden fees, no upfront costs — just results.
          </p>
        </motion.div>

        {/* Big stat */}
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="stat-number mb-2">
            <AnimatedCounter value={50} className="stat-number" /> / <AnimatedCounter value={50} className="stat-number" />
          </div>
          <p className="text-lg text-muted-foreground">Revenue split between you and Redwood</p>
        </motion.div>

        {/* Example cards */}
        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            { salary: "$150K", value: 75, label: "Per additional role" },
            { salary: "$180K", value: 90, label: "Per additional role" },
            { salary: "$200K", value: 100, label: "Per additional role" },
          ].map((item_data, i) => (
            <motion.div key={i} variants={item}>
              <TiltCard className="group h-full">
                <div className="glass-card rounded-2xl p-8 text-center h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_-10px_hsl(12_55%_50%/0.2)]">
                  <p className="mb-1 text-sm text-muted-foreground">{item_data.label}</p>
                  <p className="font-display text-lg text-muted-foreground">{item_data.salary} salary</p>
                  <div className="mt-2">
                    <AnimatedCounter value={item_data.value} prefix="$" suffix="K" className="stat-number text-4xl" duration={1.5} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Your annual take</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mb-12 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Remember — your first role, you keep <span className="text-foreground font-semibold">100%</span>. The 50/50 split applies only to additional roles managed by our team. There is no cap on how many roles you can hold.
        </motion.p>

        {/* Key points */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {[
            { icon: Ban, title: "Zero Upfront Fees", desc: "Nothing to pay. Ever. We invest in you first." },
            { icon: FileCheck, title: "Written Agreement", desc: "All terms defined clearly in writing before any engagement begins." },
            { icon: TrendingUp, title: "Unlimited Potential", desc: "No cap on roles or earnings. The more you grow, the more you earn." },
            { icon: DollarSign, title: "You Handle Taxes", desc: "Members handle their own tax obligations. Simple and transparent." },
          ].map((card) => (
            <motion.div key={card.title} variants={item}>
              <div className="group glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(12_55%_50%/0.15)]">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring" }}>
                  <card.icon size={22} className="mb-3 text-primary" />
                </motion.div>
                <h4 className="mb-2 font-display text-base font-semibold text-foreground">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompensationSection;
