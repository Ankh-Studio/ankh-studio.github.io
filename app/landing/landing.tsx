import Navigation from '~/components/navigation';
import PlanetEarth from "app/components/earth"
import Hero from "~/components/hero";
import About from "~/components/about";
import Services from "~/components/services";
import Founders from '~/components/founders';
import Contact from '~/components/contact';
import Portfolio from '~/components/portfolio';
import Footer from '~/components/footer';
import { useRef } from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';

const AnkhStudioLanding = () => {
  const lenisRef = useRef<LenisRef>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lenisDebug   = false;
  const lenisOptions = lenisDebug 
    ? {
      lerp: 1.0,
      duration: 0.0,
    }
    : {
      lerp: 0.1,
      duration: 2.0,
    };

  return (
    <ReactLenis root options={{
      ...lenisOptions
    }} ref={lenisRef}>
      <div className="min-h-screen  text-white overflow-x-hidden bg-[rgba(0,0,0,0.0)]">
        <Navigation scrollToSection={scrollToSection}/>
        <PlanetEarth />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Founders />
        <Portfolio />
        <Contact />
        <Footer />
        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 10s ease infinite;
          }
        `}</style>
      </div>
  </ReactLenis>
  );
};

export default AnkhStudioLanding;
