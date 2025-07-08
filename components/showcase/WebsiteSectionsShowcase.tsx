import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { TrainingPrograms } from "../TrainingPrograms";
import { Footer } from "../Footer";
import { WebsiteSection } from "./WebsiteSection";

export function WebsiteSectionsShowcase() {
  return (
    <div className="space-y-16">
      <WebsiteSection title="Header Component">
        <Header />
      </WebsiteSection>

      <WebsiteSection title="Hero Section">
        <HeroSection />
      </WebsiteSection>

      <WebsiteSection title="Training Programs">
        <TrainingPrograms />
      </WebsiteSection>

      <WebsiteSection title="Footer Component">
        <Footer />
      </WebsiteSection>
    </div>
  );
}