import { motion, useScroll, useTransform } from "motion/react";
import { useThemeContext } from "@/hooks/useThemeContext";

const eclipseTime = 0.25;
const Images = {
  Sun               : "url(/images/WhoAreWe/sun.png)",
  Moon              : "url(/images/WhoAreWe/Moon.png)",
  MoonEclipsed      : "url(/images/WhoAreWe/MoonEclipsed.png)",
  EclipseOne        : "url(/images/WhoAreWe/EclipseOne.png)",
  PyramidEclipsed   : "url(/images/WhoAreWe/PyramidNighttime.png)",
  Pyramid           : "url(/images/WhoAreWe/PyramidDaytime.png)",
  Mountains         : "url(/images/WhoAreWe/MountainsDaytime.png)",
  Sky               : "url(/images/WhoAreWe/SkyDaytime.png)",
  SkyEclipsed       : "url(/images/WhoAreWe/starry_night.png)",
};

const AnimationTimes = {
  TotalY: [0.0, 0.091],
  SkyEclipse: [0.24, 0.25],
};

type WhoAreWeProps = {
  zIndex     : number;
};

const WhoAreWe = ({ 
  zIndex,
}: WhoAreWeProps) => {
  const { scrollYProgress } = useScroll();

  const yPos = useTransform(
    scrollYProgress,
    AnimationTimes.TotalY,
    ["-100vh", "0vh"],
  );
  const exitBlur = useTransform(
    scrollYProgress,
    [0.35, 0.4],
    ['blur(0px)', 'blur(10px)']
  );

  const Sky = () => {
    const eclipse = useTransform(
      scrollYProgress,
      AnimationTimes.SkyEclipse,
      [1.0, 0.0],
    );
    const starRotation = useTransform(
      scrollYProgress,
      [0.145, 1.0],
      [0, 90]
    );

    return (
      <div className={"transitionContainer"}>
        <motion.div 
          className={"transition"}
          style={{
            backgroundImage: Images.SkyEclipsed,
            rotate: starRotation,
            scaleX: "200%",
            scaleY: "200%",
          }}
        ></motion.div>
        <motion.div 
          className={"transition"}
          style={{
            backgroundImage: Images.Sky,
            opacity: eclipse,
            transform: 'scale(1.2)',
          }}
        ></motion.div>
        <motion.div />
      </div>
    );
  };

  const Mountains = () => {
    const nightDayFilter = useTransform(
      scrollYProgress,
      [0.24, eclipseTime-0.0001, eclipseTime],
      ["brightness(1.0) hue-rotate(0deg)", "brightness(0.4) hue-rotate(0deg)", "brightness(0.4) hue-rotate(115deg)"],
    );

    return (
      <div className="transitionContainer">
        <motion.div 
          className="transition mountain"
          style={{
            backgroundImage: Images.Mountains,
            filter: nightDayFilter,
            //opacity,
          }}
        />
      </div>
    );
  };
  const Pyramid = () => {
    const pyramidY = useTransform(
      scrollYProgress,
      [0.00, 0.125],
      ['20vh', '-12.4vh'],
    );

    const opacity = useTransform(
      scrollYProgress,
      [eclipseTime-0.0001, eclipseTime],
      [1.0, 0.0]
    );
    const brightness = useTransform(
      scrollYProgress,
      [eclipseTime-0.005, eclipseTime],
      ["brightness(1.0)", "brightness(0.4)"]
    );

    return (
      <div className={"pyramidContainer"}>
        <motion.div 
          className={"pyramid"}
          style={{
            backgroundImage: Images.PyramidEclipsed,
            y: pyramidY,
          }}
        />
        <motion.div 
          className={"pyramid"}
          style={{
            backgroundImage: Images.Pyramid,
            y: pyramidY,
            filter: brightness,
            opacity
          }}
        />
      </div>
    );
  };

  const Eclipse = () => {
    const arc = useTransform(
      useTransform(
        scrollYProgress,
        [0.0, eclipseTime],
        [Math.PI, 0]
      ),
      (a) => (Math.cos(a) * -600) + 600,
    );

    const sunX = useTransform(
      scrollYProgress,
      [0.1, eclipseTime],
      ["-100vw", "0vw"],
    );

    const moonX = useTransform(
      scrollYProgress,
      [0.1, eclipseTime],
      ["100vw", "0vw"],
    );

    const beforeEclipe = useTransform(
      scrollYProgress,
      [0.0, eclipseTime-0.000001, eclipseTime],
      [1.0, 1.0, 0.0],
    );

    const totalEclipse = useTransform(
      scrollYProgress,
      [0.0, eclipseTime-0.000001, eclipseTime],
      [0.0, 0.0, 1.0],
    );

    return (
      <div className="eclipse">
        <motion.div 
          className="sun"
          style={{
            backgroundImage: Images.Sun,
            x: sunX,
            y: arc,
          }}
        />
        
        <motion.div 
          className="moon"
          style={{
            backgroundImage: Images.MoonEclipsed,
            x: moonX,
            y: arc,
            opacity: totalEclipse,
          }}
        />
        <motion.div 
          className="moon"
          style={{
            backgroundImage: Images.Moon,
            x: moonX,
            y: arc,
            opacity: beforeEclipe,
          }}
        />
        <motion.div className="totalEclipseContainer" 
          style={{
            backgroundImage: Images.EclipseOne,
            x: moonX,
            y: arc,
            opacity: totalEclipse,
          }}
        />
      </div>
    );
  };

  const Content = () => {
    const { themeColors } = useThemeContext();

    const titleColors = useTransform(
      scrollYProgress,
      [0.00, eclipseTime-0.00001, eclipseTime],
      [themeColors.TextSecondary, themeColors.TextSecondary, themeColors.AccentTwo],
    );
    const titleY = useTransform(
      scrollYProgress,
      [0.09, eclipseTime],
      ['-300%', '-150%'],
    );
    const descY = useTransform(
      scrollYProgress,
      [eclipseTime, eclipseTime*2],
      ["0%", "-20%"]
    );
    const shouldBreath = useTransform(
      scrollYProgress,
      [0.0, eclipseTime],
      [false, true],
    );
    const descOpacity = useTransform(
      scrollYProgress,
      [0, eclipseTime-0.0001, eclipseTime],
      [0, 0, 1],
    );

    const Breath = () => {
      return (
        <motion.span
          className="inline-block sm:px-3 px-1"
          initial={{ color: themeColors.TextSecondary}}
          animate={
            shouldBreath
            ? { color: [themeColors.TextSecondary, themeColors.AccentTwo, themeColors.TextSecondary] }
            : {}
          }
          transition={{ 
            duration: 4,
            ease: [0.4, 0.0, 0.6, 1.0],
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "loop"
          }}
        >
        {" Breath "}
        </motion.span>
      );
    };

    const Underscored = ({ text } : { text:string }) => {
      return (
        <motion.span
          className="inline-block px-3"
          initial={{
            borderBottom: `1px solid`,
            borderColor: `${themeColors.AccentTwo}00`,
          }}
          animate={
            shouldBreath
              ? { borderColor: [`${themeColors.AccentTwo}00`, themeColors.AccentTwo, `${themeColors.AccentTwo}00`]}
              : {}
          }
          transition={{ 
            duration: 4,
            ease: [0.4, 0.0, 0.6, 1.0],
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "loop"
          }}
        >
          { text }
        </motion.span>
      );
    };

    return (
      <div className="content">
        <motion.div 
          className="title"
          style={{
            translateY: titleY,
          }}
        >
          <motion.h1 style={{ color: titleColors }}>
            Who Are We
          </motion.h1>
        </motion.div>
        <motion.div 
          className="ankhDescription"
          style={{
            opacity: descOpacity,
            y: descY,
          }}
        >
          <h2>
            At <span className="ankhStudio">Ankh Studio</span>, we 
              <Breath />
            life into software with <br/><Underscored text={"ingenuity"} />, <Underscored text={"reliabillity"} />, and <Underscored text={"innovation"} />.
          </h2>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div 
      className="whoAreWe"
      style={{
        y: yPos,
        zIndex: zIndex,
        filter: exitBlur,
      }}
    >
      <Sky       />
      <Pyramid   />
      <Eclipse   />
      <Content   />
      <Mountains />
    </motion.div>
  );
};

export default WhoAreWe;
