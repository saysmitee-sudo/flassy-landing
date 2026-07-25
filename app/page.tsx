import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { FeatureSplits } from "@/components/FeatureSplits";
import { WorkGrid } from "@/components/WorkGrid";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <FeatureSplits />
        <WorkGrid />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
