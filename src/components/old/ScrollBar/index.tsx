import { motion, MotionStyle, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Info } from "@/lib/logger";
import { timeStamp } from "console";
import { useThemeContext } from "@/hooks/useThemeContext";

type BarProps = {
  className   : string;
  heightTrans : { 
    inputRange  : number[], 
    outputRange : string[],
  },
  opacityTrans : { 
    inputRange  : number[], 
    outputRange : number[],
  },
};

const Bar = ({
  className, 
  heightTrans,
  opacityTrans,
}: BarProps) => {
  const {
    scrollYProgress,
  } = useScroll();
  const height = useTransform(
    scrollYProgress,
    heightTrans.inputRange,
    heightTrans.outputRange,
  );
  const opacity = useTransform(
    scrollYProgress,
    opacityTrans.inputRange,
    opacityTrans.outputRange,
  );

  const blur = 3;
  const filter = useTransform(
    scrollYProgress,
    heightTrans.inputRange,
    [`sepia(0.5) brightness(0.75) blur(${blur}px)`, `sepia(0.0) brightness(0.75) blur(${blur}px)`]
  );

  return (
    <motion.div 
      className={cn(
        "absolute top-0 right-0 left-0 w-full",
        className,
      )}
      style={{
        boxShadow: '3px 1px 0px 0px rgba(255, 255, 255, 1) inset',
        borderBottomRightRadius: '0.75rem',
        borderBottomLeftRadius: '0.75rem',
        height,
        opacity,
        filter,
      }}
    />
  );
};

const Keyframes = {
  Hero     : [0, 0.09],
  WhoAreWe : [0.09, 0.385],
  AnkhTeam : [0.385, 0.555],
};

const AnkhScrollBar = () => {
  const { themeColors } = useThemeContext();
  const {
    scrollYProgress,
  } = useScroll();

  const opacity = [1, 0.7];

  const bs = '0px 0px 10px ';
  const boxShadow = useTransform(
    scrollYProgress,
    [
      ...Keyframes.Hero,
      ...Keyframes.WhoAreWe
    ],
    [
      bs+themeColors.Background+"7F",
      bs+themeColors.AccentOne+"7F",
      bs+themeColors.AccentTwo+"7F",
      bs+themeColors.AccentThree+"7F",
    ]
  );

  return (
    <motion.div 
      className={
        "fixed top-[25vh] right-[2vw] h-[50vh] w-[1.5rem] bg-Dark-Background z-[1000]  overflow-hidden"
      }
      style={{
        opacity: 0.8,
        filter: 'sepia(0.375)',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.75rem',
        borderBottomLeftRadius: '0.75rem',
        //borderTop  : '1px solid rgba(100, 100, 100, 0.1)',
        //borderLeft : '1px solid rgba(100, 100, 100, 0.1)',
        boxShadow,//  : '0px 0px 20px rgb(255,0,0)',
      }}
    >
      {/* Hero */}
      <Bar 
        className="bg-Dark-AccentOne"
        heightTrans={{
          inputRange  : Keyframes.Hero,
          outputRange : ["0%", "100%"]
        }}
        opacityTrans={{
          inputRange  : [0.0, 0.01, Keyframes.Hero[1], Keyframes.Hero[1]+0.01],
          outputRange : [0, 1, ...opacity],
        }}
      />
      {/* WhoAreWe? */}
      <Bar
        className="bg-Dark-AccentTwo"
        heightTrans={{
          inputRange  : Keyframes.WhoAreWe,
          outputRange : [`0%`, '100%'],
        }}
        opacityTrans={{
          inputRange  : [Keyframes.WhoAreWe[1], Keyframes.WhoAreWe[1]+0.01],
          outputRange : opacity,
        }}
      />
      {/* AnkhTeam */}
      <Bar 
        className="bg-Dark-AccentThree"
        heightTrans={{
          inputRange  : Keyframes.AnkhTeam,
          outputRange : ['0%', '100%'],
        }}
        opacityTrans={{
          inputRange  : [Keyframes.AnkhTeam[1], Keyframes.AnkhTeam[1]+0.01],
          outputRange : [1, 0.5],
        }}
      />
    </motion.div>
  );
};

export default AnkhScrollBar;
