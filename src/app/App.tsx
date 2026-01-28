import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Experience } from '@/app/components/Experience';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { CustomCursor } from '@/app/components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-black antialiased" style={{ cursor: 'none' }}>
          <CustomCursor />
          <Navigation />
          <main>
            <Hero />
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}