import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyTogether from '@/components/WhyTogether';
import Skills from '@/components/Skills';
import Showcase from '@/components/Showcase';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <WhyTogether />
      <Skills />
      <Showcase />
      <About />
      <Contact />
    </main>
  );
}
