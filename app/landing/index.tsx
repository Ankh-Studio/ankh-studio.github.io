import Navigation  from './navigation';
import PlanetEarth from "./earth"
import Hero        from "./hero";
import About       from "./about";
import Services    from "./services";
import Founders    from './founders';
import Contact     from './contact';
import Portfolio   from './portfolio';
import Footer      from './footer';
import { useRef }  from 'react';
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
      </div>
  </ReactLenis>
  );
};

export default AnkhStudioLanding;
