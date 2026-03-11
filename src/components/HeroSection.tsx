import { motion } from "framer-motion";
import { Star, Car, Trophy, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Star, value: "5.0", label: "Rating" },
  { icon: Car, value: "1000+", label: "Cars Detailed" },
  { icon: Trophy, value: "8+", label: "Years Experience" },
  { icon: Wrench, value: "Expert", label: "Detailing Team" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury car in detailing studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-body text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-4"
          >
            Premium Car Detailing Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Mumbai's Most Trusted{" "}
            <span className="text-gradient">Luxury Car Detailing</span>{" "}
            Studio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-body"
          >
            Ceramic Coating • PPF • Graphene Coating • Premium Car Spa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#booking"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base neon-glow hover:scale-105 transition-transform font-body tracking-wide"
            >
              Book Appointment
            </a>
            <a
              href="#gallery"
              className="px-8 py-4 rounded-lg border border-primary/40 text-foreground font-bold text-base hover:bg-primary/10 transition-all font-body tracking-wide"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-4 sm:p-6 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-heading text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-body">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
