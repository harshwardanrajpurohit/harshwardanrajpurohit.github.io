import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Socials from './components/Socials';
import WallOfFame from './components/WallOfFame';
import Gallery from './components/Gallery';

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#030014] text-white selection:bg-cyan-500/30 cursor-none relative">
        <Background />
        <Cursor />
        <Socials />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <WallOfFame />
          <Gallery />
          <Blog />
          <Contact />
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm glass-card mt-20 border-t border-white/5">
          <p>© {new Date().getFullYear()} HRJ. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
