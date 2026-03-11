import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold neon-text mb-3">WISE CAR CARE</h3>
            <p className="text-xs text-muted-foreground font-body">वाइस कार केयर</p>
            <p className="text-xs text-muted-foreground font-body mt-2">Mumbai's most trusted luxury car detailing studio.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-3 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase() === "contact" ? "booking" : link.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-3 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="tel:08928166717" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4" /> 08928166717
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Shop No 13, 14, Galli No 14, Ganpat Patil Nagar, IC Colony, Borivali West, Mumbai
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-3 uppercase tracking-wider">Follow Us</h4>
            <a
              href="https://www.instagram.com/wisecarcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:neon-border transition-all text-sm text-muted-foreground hover:text-primary font-body"
            >
              <Instagram className="w-5 h-5" />
              @wisecarcare
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Wise Car Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
