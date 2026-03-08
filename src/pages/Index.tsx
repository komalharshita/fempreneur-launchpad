import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BusinessToolsSection from "@/components/sections/BusinessToolsSection";
import MidCTASection from "@/components/sections/MidCTASection";
import LearningToolsSection from "@/components/sections/LearningToolsSection";
import ResourceLibrarySection from "@/components/sections/ResourceLibrarySection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <BusinessToolsSection />
      <MidCTASection />
      <LearningToolsSection />
      <ResourceLibrarySection />
      <ShowcaseSection />
      <CTASection />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
