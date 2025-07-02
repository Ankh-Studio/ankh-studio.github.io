import { useMemo, type ReactNode } from "react";
import Ankh from "~/components/ankh";
import { GradientText } from "~/components/gradient_text";
import { cn } from "~/utils/cn";
import AnubisAI from "/images/anubis_ai.png";
import KhonsuAI from "/images/khonsu_ai.png";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute -z-1 inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/90"/>
      <div className="absolute -z-1 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"/>

      <img 
        className={cn(
          "absolute",
          "right-0 bottom-[22%] md:bottom-0",
          "xl:right-0 xl:bottom-8 xl:max-w-2/3",
          "brightness-60 -z-1"
        )}
        src={AnubisAI}
        alt={"Anubis Android"}
      />
    </>
  );
};


const Hero = ({
  scrollToSection,
}:{ 
  scrollToSection: (sectionId: string) => void,
}) => {
  const InfoCard = ({
    title,
    desc
  }:{
    title: string,
    desc: string,
  }) => {
    return (
      <div className={cn(
        "w-full h-32 md:h-48",
        "flex flex-col justify-center",
        "overflow-clip mr-0 md:mr-2",
        "bg-gradient-to-br from-gray-400/10 to-black/40",
        "backdrop-blur-lg border border-white/10",
        "rounded-lg shadow-2xl shadow-black/10",
        "hover:shadow-black/20 transition-all duration-300 hover:scale-105",
      )}>
        <div className={cn(
          "w-2/3 h-2/3 flex flex-col justify-center mx-auto",
          "border-l border-l-gray-700/30 pl-4"
        )}>
          <h2 className={cn(
            "text-[0.7rem] md:text-lg mb-3 md:mb-6",
            "leading-tight tracking-tighter font-semibold text-gray-100/60",
          )}>{ title }</h2>
          <p className={cn(
            "text-[0.5rem]  md:text-sm",
            "leading-tight tracking-tighter",
            "font-light text-gray-400/50",
          )}>{ desc }</p>
        </div>
      </div>
    );
  };


  return (
    <section id="Hero" className={cn(
      "heroSection  box-border",
    )}>
      <HeroBackground />
      {/** --Left Title/Info-- **/}
      <div className={cn(
        "h-full w-full lg:w-5/6 2xl:w-4/7",
        "flex flex-row justify-start 2xl:justify-end",
        "md:pl-24 2xl:pl-0",
      )}>
        <div className={cn(
          "flex flex-col justify-end text-start md:pl-12",
          //"border"
        )}>
          <GradientText className={cn(
            "text-sm md:text-2xl",
            "mx-auto md:mx-0",
            "font-light tracking-tighter border translate-y-4 translate-x-1",
            "pb-2 font-semibold"
          )}>Building AI Systems that help</GradientText>
          <GradientText className={cn(
            "font-extrabold",
            "mx-auto md:mx-0",
            "text-3xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl",
            "tracking-tight 2xl:tracking-tighter",
            "font-[Merriweather]"
          )}>Businesses Evolve</GradientText>

          <p className={cn(
            "mx-auto md:mx-0",
            "text-xs md:text-lg font-light tracking-tight text-gray-200/70",
            "pl-4 py-2 border-l-2 md:border-l-4 border-l-purple-500/50 rounded-l-xl",
            "w-3/4 mt-3 md:mt-6"
          )}>
            We are digital architects of the new age, forging technology that will bridge millennia. 
          </p>

          <div className={cn(
            "w-full h-1/4 flex flex-row justify-start",
          )}>
            <div className={cn(
              "w-5/7 h-full flex flex-col justify-end pb-6 md:pb-0 md:justify-center",
              "mx-auto md:mx-0",
            )}>
              <button 
                aria-label="Contact Ankh Studio"
                className={cn(
                  "mx-auto md:mx-0",
                  "w-40 h-15  md:w-60 md:h-20 overflow-clip",
                  "cursor-pointer backdrop-blur-2xl rounded-md",
                  "bg-gradient-to-br from-gray-400/10 to-black/40",
                  "backdrop-blur-2xl backdrop-brightness-50 border border-white/10",
                  "rounded-lg shadow-2xl shadow-black/10",
                  "text-md font-light tracking-tighter text-gray-200/30",
                  "hover:w-64 hover:text-gray-200/50 transition-all duration-500 ease-out"
                )}
                onClick={() => scrollToSection("contact")}
              >
                CONTACT ANKH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** --Bottom-Right Glass Cards-- **/}
      <div className={cn(
        "flex flex-col w-full justify-end items-center lg:items-end",
      )}>
        <div className={cn(
          "flex flex-row ",
          "w-full",
          "md:w-9/10",
          "lg:w-240 lg:mx-0 lg:items-end",
        )}>
          <InfoCard title="TAILORED AI SOLUTIONS" desc="Custom-built AI tools designed to meet your unique business challenges head-on."/>
          <InfoCard title="FUTURE-READY INTEGRATION" desc="Seamlessly embed AI into your workflows to evolve faster and stay ahead of the curve."/>
        </div>
      </div>

      <div className={cn(
        "absolute left-0 -bottom-2 mb-4 h-36 w-[100vw] rounded-tl-4xl rounded-tr-4xl  bg-black",
        "bottom-border-saw -z-1",
      )}/>
    </section>
  );
};

export default Hero;
