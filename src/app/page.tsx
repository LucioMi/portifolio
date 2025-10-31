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
    <main className="min-h-screen pt-16">
      <section id="home">
        <Hero />
      </section>
      <Roles />
      <Features />
      <WhyTogether />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
