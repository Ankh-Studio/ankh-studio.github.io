import React, {  ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, frame, cancelFrame } from "motion/react";
import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { cn, useOnMotionChange } from "@/lib/utils";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useDebugUIContext } from "@/hooks/useDebugUIContext";
import Hero from "../Hero";
import WhoAreWe from "../WhoAreWe";
import DebugUIWindow from "../DebugUI";
import AnkhTeam from "../AnkhTeam";
import AnkhScrollBar from "../ScrollBar";
import { TeamAnkh } from "../TestingTwo";
//import { TestTeam } from "../TestingTwo";

type SectionWrapperProps = {
  id         : string | number;
  zIndex     : number;
  depth      : number;
  children   : ReactNode;
};

const SectionWrapper = ({
  id,
  zIndex,
  depth,
  children,
}: SectionWrapperProps) => {
  const {
    themeColors,
  } = useThemeContext();
  const pageDepth = Math.max(depth, 1) * 100;

  return (
    <div 
      key={id}
      style={{
        position        : "relative",
        width           : "100vw",
        height          : `${pageDepth}vh`,
        zIndex          : zIndex,
        //backgroundColor : themeColors.Background,
      }}
    >
    <div 
      style={{
        position:"sticky",
        top: 0,
        width: "100vw",
        height: "100vh",
      }}
      >
      { children }
    </div>
    </div>
  );
};

/** Used in place for LandingPage Sections that aren't created yet.
 *  When a new section is ready to be worked on, we simply replace 
 *  a DevPage with the New section. 
 *  That way we don't messup any of our Motion useTransform input ranges
 *  within our other sections.
 **/
const DevPage = ({ 
  className = "",
}:{ 
  className?: string,
}) => {
  return (
    <motion.div 
      className={cn(
        "relative w-[100vw] h-[100vw] bg-Dark-Surface bg-opacity-80",
        className
      )}
    >
      <div className="w-[full] h-[full] flex justify-center">
        <motion.div 
          className={
            "sticky top-0 w-[10vw] h-[50vw] bg-Dark-Background"
          }
        >
        </motion.div>
      </div>
    </motion.div>
  );
};

const LandingPage = () => {
  //  Depth determines how long it takes to scroll through a particular section..
  //  A section's Parent Wrapper will utilize depth via `height: ${depth*100}vw`
  const pages = Object.entries({
    "Hero": () => {
      return {
        component: <Hero />,
        depth: 1,
      };
    },
    "WhoAreWe": (zIndex: number) => ({
      component: <WhoAreWe zIndex={zIndex}/>,
      depth: 3,
    }),
    "Team": (_: number) => ({
        component: <AnkhTeam />,
        depth: 2,
    }),
    "DevTwo": (_: number) => ({
        component: <DevPage  className={"bg-Dark-AccentOne"} />,
        depth: 2,
      }),
    "DevThree": (_: number) => ({
        component: <DevPage  className={"bg-Dark-AccentThree"} />,
        depth: 2,
    }),
  });

  const {
    updateDebugProp,
    showDebug,
  } = useDebugUIContext();

  const lenisRef = useRef<LenisRef>(null);
  const {
    scrollY,
    scrollYProgress,
  } = useScroll();

  const ref = useRef<HTMLDivElement>(null);

  const [ totalHeight, setTotalHeight ] = useState<number>(0);
  const [ yScroll, setYScroll ]     = useState<number>(0);
  const [ yProgress, setYProgress ] = useState<number>(0);
  useOnMotionChange(
    scrollY,
    (y) => setYScroll(y),
  );

  useOnMotionChange(
    scrollYProgress,
    (y) => setYProgress(y),
  );

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

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);
    const height = ref?.current?.scrollHeight;
    if( height ) {
      setTotalHeight(height);
    }
    return () => cancelFrame(update);
  }, []);

  if( showDebug ){
    useEffect(() => {
      updateDebugProp({
        title     : "position",
        value     : yScroll,
        className :"text-Dark-AccentOne"
      });
      updateDebugProp({
        title     : "Percentage",
        value     : Math.round(yProgress * 1000) / 1000,
        className :"text-Dark-AccentOne"
      });
    }, [yScroll]);
    useEffect(() => {
      if( totalHeight === 0 ) return;
      updateDebugProp({
        title     : "Total Height",
        value     : totalHeight + "px",
        className : "text-Dark-AccentThree" 
      });
    }, [totalHeight]);
  }
  const testing = true;

  if( testing ){
    return (
      <ReactLenis root options={{
        autoRef: false,
        ...lenisOptions
      }} ref={lenisRef}>
        <TeamAnkh />
      </ReactLenis>
    );
  }

  return (
    <ReactLenis root options={{ 
      autoRef: false,
      ...lenisOptions
    }} ref={lenisRef}>
      <DebugUIWindow zIndex={(pages.length+1) * 10}/>

      <AnkhScrollBar />
      <motion.div
        ref={ref}
        className="absolute top-0 left-0"
      >
        { pages.map(([title, get], index) => {
          const zIndex = (pages.length - index) * 10;

          const {
            component,
            depth,
          } = get(zIndex);

          return (
            <div key={title}>
              <SectionWrapper
                id={title} 
                depth={depth}
                zIndex={zIndex}
              >
                { component }
              </SectionWrapper>
            </div>
          );
        }) }
      </motion.div>
    </ReactLenis>
  );
};

export default LandingPage;
