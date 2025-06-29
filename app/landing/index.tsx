import Navigation  from './navigation';
import PlanetEarth from "./earth"
import Hero        from "./hero";
import About       from "./about";
import Services    from "./services";
import Founders    from './founders';
import Contact     from './contact';
import Portfolio   from './portfolio';
import Footer      from './footer';
import { useEffect, useRef, useState }  from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { browserName, CustomView } from "react-device-detect";
import { cn } from '~/utils/cn';
import BGParticles from '~/components/bg_particles';

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

  if( resizing ){
    return (
      <div className={cn(
        "absolute inset-0 w-[100vw] h-[100vh] overflow-hidden bg-black",
        "flex justify-center items-center"
      )}>
        <div className={cn(
          "absolute inset-0 w-[100vw] h-[100vh]",
          "bg-gradient-to-br from-black  via-purple-900/10 to-blue-900/20",
        )}/>
        <div className={
          "absolute -top-4 -left-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        }/>
        <div className={
          "absolute -bottom-4 -right-4 w-120 h-120 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-50"
        }/>
        <div className={
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-50"
        }/>
        <BGParticles 
          speed={0.1}
          size={3}
          total={1000}
        />
        <div className={
          "w-1/2 h-2/3 border border-purple-500/30 rounded-3xl"
        }></div>
      </div>
    );
  }
  return (
    <>
      {/* -- ReactLenis doesn't work too well on Safari... */}
      <CustomView condition={browserName === "Safari"}>
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
      </CustomView>
      <CustomView condition={browserName === "Chrome" || browserName === "Firefox"}>
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
      </CustomView>
    </>
  );
  //return (
  //  <ReactLenis root options={{
  //    ...lenisOptions
  //  }} ref={lenisRef}>
  //    <div className="min-h-screen  text-white overflow-x-hidden bg-[rgba(0,0,0,0.0)]">
  //      <Navigation scrollToSection={scrollToSection}/>
  //      <PlanetEarth />
  //      <Hero scrollToSection={scrollToSection} />
  //      <About />
  //      <Services />
  //      <Founders />
  //      <Portfolio />
  //      <Contact />
  //      <Footer />
  //    </div>
  //</ReactLenis>
  //);
};

export default AnkhStudioLanding;
