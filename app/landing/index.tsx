import Navigation  from './navigation';
import PlanetEarth from "./earth"
import Hero        from "./hero";
//import About       from "./about";
//import Services    from "./services";
//import Founders    from './founders';
//import Portfolio   from './portfolio';
import Contact     from './contact';
import Footer      from './footer';
import { useEffect, useRef, useState, lazy, Suspense }  from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { browserName, CustomView } from "react-device-detect";
import { cn } from '~/utils/cn';
import BGParticles from '~/components/bg_particles';
import Routes from '~/routes';
import { Route, Router } from 'react-router';
import Breakpoint from '~/utils/breakpoint';

const AboutSection     = lazy(() => import("./about"))
const ServicesSection  = lazy(() => import("./services"));
const FoundersSection  = lazy(() => import("./founders"))
const PortfolioSection = lazy(() => import("./portfolio"));

const AnkhStudioLanding = () => {
  const [resizing, setResizing] = useState<boolean>(false);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      setResizing(true);
      if( resizeTimeout ) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setResizing(false);
      }, 400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lenisRef = useRef<LenisRef>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lenisDebug   = true;
  const lenisOptions = lenisDebug 
  ? {
    lerp: 1.0,
    duration: 0.0,
  }
  : {
    lerp: 0.5,
    duration: 2.0,
  };
    const debugging = true;


  return (
      <section className={cn(
        "aspect-auto h-screen",
        "overflow-x-hidden",
      )}>
        { !!debugging && <Breakpoint />}
        <Navigation scrollToSection={scrollToSection}/>
        <Hero scrollToSection={scrollToSection} />
        <Suspense>
          <AboutSection />
          <ServicesSection />
          <FoundersSection />
          <PortfolioSection />
          <Contact />
        </Suspense>
        <Footer  />
      </section>
  );
};

export default AnkhStudioLanding;
