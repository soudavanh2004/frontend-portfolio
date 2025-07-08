// pages/index.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Footer />
    </main>
  );
}
