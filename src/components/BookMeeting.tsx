import { useEffect } from "react";
import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/jacekgorski118/30min";

const BookMeeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Book a Meeting
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
            Let's Talk
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ready to learn more? Pick a time that works for you and we'll walk you through everything — no pressure, no commitment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl"
        >
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?background_color=1a1a2e&text_color=e0e0e0&primary_color=6366f1`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BookMeeting;
