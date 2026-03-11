import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, label: "Mercedes Ceramic Coating" },
  { src: gallery2, label: "Audi PPF Installation" },
  { src: gallery3, label: "Interior Deep Cleaning" },
  { src: gallery4, label: "BMW Paint Correction" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Portfolio</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden neon-border cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                <span className="text-sm font-bold font-body text-center px-2">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/wisecarcare/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline font-body"
          >
            View more on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
