import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CountrySection from "@/components/CountrySection";
import TestPrepSection from "@/components/TestPrepSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <WhyChooseUs />
      </div>
      <div id="countries">
        <CountrySection />
      </div>
      <div id="test-prep">
        <TestPrepSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
