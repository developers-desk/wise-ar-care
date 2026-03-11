import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Award, Heart } from "lucide-react";
import aboutCar from "@/assets/about-car.jpg";

const highlights = [
  { icon: Shield, label: "Precision Detailing" },
  { icon: Eye, label: "Attention to Detail" },
  { icon: Award, label: "Showroom Finish" },
  { icon: Heart, label: "Customer First" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding gradient-bg" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden neon-border">
              <img src={aboutCar} alt="BMW being detailed" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl neon-glow">
              <div className="font-heading text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground font-body">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">About Us</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Where <span className="text-gradient">Precision</span> Meets Passion
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Wise Car Care is one of Mumbai's most trusted car detailing studios located in Borivali West. For over 8 years, we have provided premium detailing services including ceramic coating, graphene coating, PPF protection, interior detailing and luxury car spa.
              </p>
              <p>
                Our workshop is known for its precision detailing, attention to minute details and showroom-quality finish. Luxury car owners trust us with their BMW, Mercedes, Audi, Skoda, SUVs and superbikes.
              </p>
              <p>
                Founder <strong className="text-foreground">Mr. Das</strong> is known for his honesty, professional advice and customer-first approach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 glass-card p-3 rounded-lg">
                  <h.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium font-body">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
