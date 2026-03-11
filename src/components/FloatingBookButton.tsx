import { MessageCircle } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <a
      href="https://wa.me/918928166717"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg animate-glow-pulse hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
};

export default FloatingBookButton;
