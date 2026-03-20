import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/redwood-logo.png";

const quickLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "How It Works", href: "#business-model" },
  { label: "The Process", href: "#process" },
  { label: "Compensation", href: "#compensation" },
  { label: "Who We're Looking For", href: "#join" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Meeting", href: "#book" },
];

const Footer = () => {
  return (
    <footer className="section-darker border-t border-border">
      <motion.div
        className="container mx-auto px-6 py-16 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Three columns */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Left */}
          <div>
            <img src={logo} alt="Redwood Engineering Labs" width={200} height={50} className="h-10 w-auto" />
            <p className="mt-2 font-display text-sm italic text-accent">
              "Your win is our win."
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A private remote software engineering network based in the United
              States. US · Canada · Australia.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="mb-4 text-sm font-bold text-foreground">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:vladyslavshevchenko005@gmail.com"
                className="flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 hover:text-accent"
              >
                <Mail size={16} className="text-accent" />
                vladyslavshevchenko005@gmail.com
              </a>
              <a
                href="https://wa.me/12602375999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-200 hover:text-accent"
              >
                <MessageCircle size={16} className="text-accent" />
                +1 (260) 237-5999
              </a>
              <p className="mt-2 text-xs italic text-muted-foreground">
                Reach out anytime — we respond fast.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-accent/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Redwood Engineering Labs. All rights reserved.</p>
          <p>Going public Q3 2026.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
