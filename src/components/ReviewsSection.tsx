import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Om Nikam", text: "Amazing detailing service! My car looks better than the day I bought it. The team is professional and the finish is flawless." },
  { name: "Mahesh T S", text: "This is my third car getting detailed at Wise Car Care. The PPF work is excellent and the team is highly professional." },
  { name: "Sunny Unni", text: "Excellent cleaning service at a reasonable price. Das and Vicky run the place with passion." },
  { name: "Sudhir Samikutty", text: "My BMW X3 looks brand new! Fantastic service. Highly recommend to anyone who cares about their car." },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="reviews" className="section-padding gradient-bg" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Testimonials</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-muted-foreground mt-3 font-body">⭐ 5.0 Rating · 48 Reviews on Google</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10 rounded-2xl neon-border text-center relative">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-base sm:text-lg font-body leading-relaxed mb-6 italic">
              "{reviews[current].text}"
            </p>
            <div className="font-heading text-sm font-bold text-primary">{reviews[current].name}</div>

            <div className="flex justify-center gap-4 mt-6">
              <button onClick={prev} className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
