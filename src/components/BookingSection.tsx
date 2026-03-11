import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Ceramic Coating", "Graphene Coating", "PPF", "Interior Cleaning",
  "Exterior Detailing", "Paint Correction", "Sun Control Film",
  "Bike Detailing", "Premium Car Wash", "Undercarriage Cleaning",
];

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", car: "", service: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'd like to book a detailing appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nCar: ${form.car}\nService: ${form.service}\nDate: ${form.date}`;
    window.open(`https://wa.me/918928166717?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="booking" className="section-padding gradient-bg" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Book Now</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Book Your <span className="text-gradient">Detailing</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl neon-border space-y-5">
            <input
              required placeholder="Your Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              required placeholder="Phone Number" type="tel" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              required placeholder="Car Model (e.g. BMW X3)" value={form.car}
              onChange={(e) => setForm({ ...form, car: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <select
              required value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">Select Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <input
              required type="date" value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-sm font-body neon-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Book Your Detailing
            </button>
          </form>

          <div className="text-center mt-6">
            <a
              href="https://wa.me/918928166717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-foreground font-bold text-sm font-body hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Quick Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
