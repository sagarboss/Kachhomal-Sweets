import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { SignatureProducts } from "@/components/home/SignatureProducts";
import { SpecialServices } from "@/components/home/SpecialServices";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <SignatureProducts />
        <SpecialServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
