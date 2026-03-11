import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Crown, Wrench, Search, Users, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Clock, title: "8+ Years Experience", desc: "Proven expertise in premium car detailing" },
  { icon: Crown, title: "Luxury Car Specialists", desc: "Trusted by BMW, Mercedes, Audi owners" },
  { icon: Wrench, title: "Professional Equipment", desc: "Latest detailing tools and products" },
  { icon: Search, title: "Attention To Detail", desc: "Obsessive care for every surface" },
  { icon: Users, title: "Trusted by Hundreds", desc: "1000+ cars detailed with 5-star reviews" },
  { icon: BadgeDollarSign, title: "Affordable Premium", desc: "Premium quality at competitive pricing" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Why Us</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Choose <span className="text-gradient">Wise Car Care</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 rounded-xl text-center group hover:neon-border transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground font-body">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
