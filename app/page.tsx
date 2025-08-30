import { WelcomeSection } from "./components/welcome";
import { HeroSection } from "./components/hero";
import { DiscoverySection } from "./components/discovery";
import { JoinTodaySection } from "./components/join-today";
import { RegistryFormSection } from "./components/registry-form";
import { FooterSection } from "./components/footer";
import TikTokReelsSection from "./components/tiktok-list";
import JoinCountSection from "./components/join-count";
import VisitPing from "./components/visit-ping";

export default function MiraLanding() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <VisitPing />

      {/* CLASSIC / LEGACY WELCOME STRIPE */}
      <WelcomeSection />

      {/* MODERN HERO */}
      <HeroSection />

      {/* WHAT YOU CAN DO */}
      {/* <CanDoSection /> */}

      {/* LEGACY DISCOVER SECTION (Dark) */}
      <DiscoverySection />

      {/* LEGACY JOIN TODAY (Teal band) */}
      <JoinTodaySection />

      {/* WHY PEOPLE LOVE + REGISTRY FORM (kept) */}
      <RegistryFormSection />

      <JoinCountSection />

      {/* ROADMAP */}
      {/* <RoadmapSection /> */}
      <TikTokReelsSection />

      {/* WHO'S BEHIND (Legacy style) */}
      {/* <WhoBehindSection /> */}

      {/* CTA */}
      {/* <CTASection /> */}

      {/* FOOTER (Teal) */}
      <FooterSection />
    </main>
  );
}

