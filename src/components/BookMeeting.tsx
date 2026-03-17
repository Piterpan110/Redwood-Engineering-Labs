import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Calendar, Clock, Send, CheckCircle2 } from "lucide-react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const getNext7Days = () => {
  const days: Date[] = [];
  const now = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(d);
  }
  return days;
};

const BookMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !email) return;

    setSending(true);
    // Simulate sending — in production, connect to an email service
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="book" className="section-darker py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-lg text-center">
            <CheckCircle2 size={64} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">Meeting Requested!</h2>
            <p className="text-muted-foreground leading-relaxed">
              Thank you, {name}. We've received your meeting request for{" "}
              <span className="text-foreground font-medium">
                {selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime}
              </span>{" "}
              (EST). We'll confirm via email shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const days = getNext7Days();

  return (
    <section id="book" className="section-darker py-28">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Book a Meeting
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Let's Talk
            </h2>
            <p className="mx-auto mb-16 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ready to learn more? Pick a time that works for you and we'll walk you through everything — no pressure, no commitment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            {/* Date selection */}
            <div className="mb-8">
              <label className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar size={16} className="text-primary" /> Select a Date
              </label>
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <button
                    type="button"
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                      selectedDate?.toDateString() === day.toDateString()
                        ? "btn-primary-glow text-primary-foreground"
                        : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                    }`}
                  >
                    <div className="text-xs opacity-70">{day.toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div>{day.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time selection */}
            {selectedDate && (
              <div className="mb-8">
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Clock size={16} className="text-primary" /> Select a Time (EST)
                </label>
                <div className="flex flex-wrap gap-3">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "btn-primary-glow text-primary-foreground"
                          : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact info */}
            {selectedTime && (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message (optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Anything you'd like us to know beforehand?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary-glow flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-50"
                >
                  {sending ? "Sending..." : (
                    <>
                      <Send size={16} /> Confirm Meeting
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookMeeting;
