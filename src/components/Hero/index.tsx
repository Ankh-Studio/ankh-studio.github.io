import { useThemeContext } from "@/hooks/useThemeContext";
import { motion } from "motion/react";
import { twJoin } from "tailwind-merge";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 10,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
    opacity: 0.5,
  },
  animate: {
    x: -220,
    opacity: 1.0,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  const { theme, themeColors } = useThemeContext();

  return (
    <div 
      className="hero h-[100dvh] overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${themeColors.Primary}, ${themeColors.Background})`
      }}
    >
      <motion.div
        className="slidingTextContainer pointer-events-none"
        style={{
          color: `${themeColors.AccentTwo}07`,
        }}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ANKH STUDIO -- DELEVERING THE FUTURE OF GAMING
      </motion.div> 

      <div className="wrapper">
        <motion.div
          style={{
            zIndex: 10,
          }}
          className="textContainer"
          variants={textVariants}
          animate="animate"
        >
          <motion.h1 
            className={
              "text-Dark-AccentTwo"
            }
            variants={textVariants}
          >
          Ankh Studio
          </motion.h1>
          {/* Ankh Studio || Buttons */}
          <div className={
            "w-1/2 ml-16"
          }>

            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
                See our Work
              </motion.button>
              <motion.button variants={textVariants}>
                Contact us
              </motion.button>
            </motion.div>

            <div 
              className="flex w-[295px] justify-center"
            >
              <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/images/svg/ankh-solid.svg"
                alt="Ankh Studio"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div 
        style={{
          background: `linear-gradient(90deg, ${themeColors.Surface}50, ${themeColors.Background})`
        }}
        className={twJoin(
          "imageContainer flex mr-32 mt-32 rounded-3xl p-32 justify-around drop-shadow-lg",
        )}
      >
        <img className={
          "rounded-full p-12 opacity-50 border border-Dark-AccentTwo border-opacity-50"
        } src="/images/ankh-circuit.png" alt="Ankh" />
      </div>
    </div>
  );
};

export default Hero;
