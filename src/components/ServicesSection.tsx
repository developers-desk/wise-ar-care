import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles, Shield, Layers, Sofa, Car, Paintbrush,
  Sun, Bike, Droplets, ArrowDown,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Ceramic Coating", desc: "Long-lasting hydrophobic protection with mirror-like shine and UV resistance." },
  { icon: Layers, title: "Graphene Coating", desc: "Next-gen graphene technology for superior durability and heat dissipation." },
  { icon: Shield, title: "Paint Protection Film", desc: "Self-healing PPF to guard against scratches, chips and road debris." },
  { icon: Sofa, title: "Interior Deep Cleaning", desc: "Complete interior restoration — leather, fabric, dashboard and carpet care." },
  { icon: Car, title: "Exterior Detailing", desc: "Multi-stage wash, clay bar treatment, polish and protective sealant." },
  { icon: Paintbrush, title: "Paint Correction", desc: "Swirl mark and scratch removal restoring factory-fresh paint clarity." },
  { icon: Sun, title: "Sun Control Film", desc: "Premium window tinting for heat rejection, UV protection and privacy." },
  { icon: Bike, title: "Bike Detailing", desc: "Specialized detailing for superbikes and premium motorcycles." },
  { icon: Droplets, title: "Premium Car Wash", desc: "Hand-wash with pH-neutral shampoo and microfiber drying." },
  { icon: ArrowDown, title: "Undercarriage Cleaning", desc: "Anti-rust treatment and thorough undercarriage degreasing." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Our Services</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Premium <span className="text-gradient">Detailing</span> Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card p-6 rounded-xl group hover:neon-border transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
