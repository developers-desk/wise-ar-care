import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="section-padding gradient-bg" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Results</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Before & <span className="text-gradient">After</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden neon-border select-none"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            <img src={beforeAfterImg} alt="Before and after detailing" className="w-full" />
            
            {/* Slider line */}
            {/* <div
              className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center neon-glow">
                <span className="text-primary-foreground text-xs font-bold">⟨⟩</span>
              </div>
            </div> */}

            {/* Labels */}
            {/* <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-bold font-body">Before</div>
            <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary font-body">After</div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
