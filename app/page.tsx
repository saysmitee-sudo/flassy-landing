import { AmbientBackground } from "@/components/AmbientBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <WorkGrid />
        <Services />
        <About />
        <Partners />
      </main>
      <Contact />
    </>
  );
}
