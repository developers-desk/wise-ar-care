import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const MapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 font-body">Location</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Find <span className="text-gradient">Us</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm font-bold mb-1">Address</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Shop No. 13, 14, Galli No 14, Ganpat Patil Nagar, IC Colony, New Link Road, Borivali West, Mumbai 400092
                </p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm font-bold mb-1">Phone</h3>
                <a href="tel:08928166717" className="text-sm text-primary font-body hover:underline">08928166717</a>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-sm font-bold mb-1">Hours</h3>
                <p className="text-sm text-muted-foreground font-body">Mon - Sun: 9:00 AM - 8:00 PM</p>
                <p className="text-sm text-muted-foreground font-body">Thursday - Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden neon-border min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56861696.51146667!2d-43.09264670000001!3d29.558231791547207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1a1adbad13f%3A0xd64aca6e9ca74bc0!2sWise%20Car%20Care!5e0!3m2!1sen!2sin!4v1773229486948!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wise Car Care Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
