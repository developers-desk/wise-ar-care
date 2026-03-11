import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BookingSection from "@/components/BookingSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BeforeAfterSection />
      <GallerySection />
      <ReviewsSection />
      <WhyChooseSection />
      <BookingSection />
      <MapSection />
      <Footer />
      <FloatingBookButton />
    </main>
  );
};

export default Index;
