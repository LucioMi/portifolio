import Hero from '@/components/Hero';
import Roles from '@/components/Roles';
import Features from '@/components/Features';
import WhyTogether from '@/components/WhyTogether';
import Skills from '@/components/Skills';
import Showcase from '@/components/Showcase';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-[var(--bg)]">
      <section id="home" className="bg-[var(--bg)]">
        <Hero />
        <Roles />
      </section>
      <Features />
      <WhyTogether />
      <section id="about" className="bg-[var(--surface)]">
        <About />
      </section>
      <section id="skills" className="bg-[var(--bg)]">
        <Skills />
      </section>
      <section id="showcase" className="bg-[var(--surface)]">
        <Showcase />
      </section>
      <section id="contact" className="bg-[var(--bg)]">
        <Contact />
      </section>
    </main>
  );
}
