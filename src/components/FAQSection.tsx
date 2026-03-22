import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Redwood Engineering Labs?",
    a: "Redwood is a private remote software engineering network based in the US. We help experienced software developers land multiple high-paying senior remote roles with companies in the US, Canada, and Australia — and support them through the entire process and long after they are hired.",
  },
  {
    q: "Is this a job board or recruiting agency?",
    a: "Neither. We are an engineering network. We work alongside you as a team — applying on your behalf, supporting every interview stage, and continuing to work with you after you land the role. Our model is built on shared success, not transactions.",
  },
  {
    q: "Do I have to pay anything to join?",
    a: "No. Zero upfront fees, zero hidden costs, nothing you pay to get started. We only earn when you earn.",
  },
  {
    q: "How does the compensation work?",
    a: "Revenue generated from your placement is split fifty-fifty. All terms are defined clearly in writing before any engagement begins — no surprises, no hidden deductions.",
  },
  {
    q: "Can I keep my current job while joining Redwood?",
    a: "Yes. Everything is structured entirely around your availability. Nothing moves without your knowledge and approval. There is no conflict with your current situation.",
  },
  {
    q: "How do you handle multiple roles simultaneously?",
    a: "Redwood's support team handles all technical work and written communications behind the scenes. You attend mandatory meetings and maintain the client relationship. You receive 50% of the full salary without carrying the full workload. This is team policy.",
  },
  {
    q: "Will companies know about Redwood?",
    a: "No. Every application, communication, and interview is conducted entirely under your name and profile. Redwood operates completely behind the scenes.",
  },
  {
    q: "Do you have a public website or LinkedIn?",
    a: "We have intentionally operated as a private network while building our foundation.",
  },
  {
    q: "How do I get started?",
    a: "Reach out with a brief introduction and your resume. We will schedule a call, walk you through everything, and determine if it is the right fit. No commitment required.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-darker py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Common Questions
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors"
                >
                  <span
                    className={`font-body text-base font-semibold transition-colors duration-300 md:text-lg ${
                      isOpen ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-accent">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
