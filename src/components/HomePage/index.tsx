import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import StarryBackground from "../StarryBackground";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import PlanetEarth from "../PlanetEarth";
import { AnkhHero } from "./ankhHero";
import { AnkhServices } from "./ankhServices";
import { AnkhFounders } from "./ankhFounders";
import { AnkhContact } from "./ankhContact";
import { AnkhFooter } from "./ankhFooter";


const HomePage = () => {
  const lenisRef = useRef<LenisRef>(null);
  const lenisDebug   = true;
  const lenisOptions = lenisDebug 
    ? {
      lerp: 1.0,
      duration: 0.0,
    }
    : {
      lerp: 0.1,
      duration: 2.0,
    };

  const [resizing, setResizing] = useState(false);
  const [ yPos, setYPos ] = useState<number>(0);
  const [ yPix, setYPix ] = useState<number>(0);
  const { scrollYProgress, scrollY } = useScroll();


  useEffect(() => {
    const subProgress = scrollYProgress.on("change", (v) => setYPos(Math.round(1000 * v)/1000));
    const subPixels = scrollY.on("change", (v) => setYPix(v));

    return () => {
      subProgress();
      subPixels();
    };
  }, []);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      setResizing(true);
      if( resizeTimeout ) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setResizing(false);
      }, 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDebug = true;
  const DebugWindow = () => {
    return (
      <motion.div 
        className={cn(
          "fixed z-[1000] left-[calc(50cqi-8rem)] top-2",
          "bg-Dark-Surface border border-black",
          "w-[20rem] h-6rem flex flex-col justify-center",
          "py-2 px-3 rounded-lg"
        )}
        style={{ y: scrollY}}
      >
        <h2 className={"text-Dark-TextSecondary text-2xl"}>
          <span>Pos: </span>
          { yPos }%
        </h2>
        <h2 className={"text-Dark-TextSecondary text-2xl"}>
          <span>Pix: </span>
          { yPix }px
        </h2>
      </motion.div>
    );
  };

  //if( resizing ) return (
  //  <div className={cn(
  //    "w-[100vw] h-[100vh] bg-Dark-Background",
  //    "flex flex-col justify-center text-center"
  //  )}>
  //    <h1 className={"text-Dark-TextSecondary text-[4.5rem]"}>
  //      ANKH STUDIO
  //    </h1>
  //  </div>
  //);
  return (
    <>
      { !!showDebug && <DebugWindow />}
      <div className={"absolute inset-0 bg-black -z-[11]"}/>
      <StarryBackground className={"-z-[10] fixed top-0 left-0 right-0"}/>
      <PlanetEarth />

      <ReactLenis root options={{
        autoRef: false,
        ...lenisOptions
      }} ref={lenisRef}>

        <AnkhHero     />
        <AnkhServices />
        <AnkhFounders />
        <AnkhContact  />
        <AnkhFooter   />
      </ReactLenis>
    </>
  );
};

export default HomePage;
