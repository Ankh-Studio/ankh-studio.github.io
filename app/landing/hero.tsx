import { useMemo } from "react";
import { GradientText } from "~/components/gradient_text";
import { cn } from "~/utils/cn";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"/>
    </>
  );
};

const Hero = ({
  scrollToSection
}: { scrollToSection: (sectionId: string) => void 
}) => {

  const Background = useMemo(() => (
    <HeroBackground />
  ), []);

  const HeroCard = () => {
    return (
      <div className={cn(
        "relative z-10 text-center h-[60vh]",
        "flex flex-col justify-center",
        "animate-pulse-purple-slow",
        "max-w-6xl  2xl:max-w-[100vw]",
        "rounded-xl 2xl:rounded-2xl",
        "pulse-card border"
      )}>
        <div className={cn(
          "flex flex-col h-full justify-center mt-12",
        )}>
          <GradientText className={cn(
            "mb-6 font-bold",
            "text-4xl md:text-5xl 2xl:text-7xl",
            "md:mx-12 2xl:mx-24 md:pb-4 2xl:pb-6",
          )}>
            Building AI Systems That Transform Business
          </GradientText>
        </div>

        <div className={cn(
          "flex flex-col h-full",
          "2xl:justify-center"
        )}>
          <p className={cn(
            "mb-12 2xl:mb-18",
            "text-l md:text-xl 2xl:text-2xl",
            "text-gray-400",
          )}>
            We are digital architects of the new age, forging technology that bridges millennia. 
          </p>

          <div className="flex justify-center">
            <button
              className={cn(
                "bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold",
                "hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25",
                "px-8 py-4 2xl:px-18 2xl:py-6",
                "text-lg 2xl:text-2xl z-3",
              )}
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-purple-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className={cn(
      "relative min-h-screen md:min-h-screen flex flex-col items-center justify-center px-0 md:px-6"
    )}>
      { Background }
        <HeroCard />

        <div className={cn(
          "absolute left-0 bottom-0 mb-4 h-36 w-[100vw] rounded-tl-full rounded-tr-full  bg-black",
          "bottom-border-saw",
          "bg-gradient-to-r from-black via-black to-blue-900/20",
        )}/>
    </section>
  );
}

export default Hero;
