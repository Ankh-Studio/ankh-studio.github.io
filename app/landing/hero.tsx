import { useEffect, useState, type ReactNode } from "react";
import { cn } from "~/utils/cn";
import AnubisAI from "/images/anubis_ai.png";
import KhonsuAI from "/images/khonsu_ai.png";
import OsirisAI from "/images/osiris_ai.png";
import type { BorderColor, TWColor } from "~/utils/tailwind_types";
import type { ClassValue } from "clsx";
import { GradientAnchor, GradientButton } from "~/components/buttons";


type HeroTheme = 'anubis' | 'khonsu' | 'osiris';
type HeroDiety = {
  diety    : string;
  alt      : string;
  bg_from  : TWColor;
  bg_to    : TWColor;
  txt_from : TWColor;
  txt_via  : TWColor;
  txt_to   : TWColor;
  accent   : BorderColor;
}

const HeroDieties: {
  [K in HeroTheme]: HeroDiety
} = {
  "anubis": {
    diety    : AnubisAI,
    alt      : "Futuristic Egyptian Diety; Mecha Anubis",
    bg_from  : "from-purple-900/40",
    bg_to    : "to-blue-900/90",
    txt_from : "from-purple-900",
    txt_via  : "via-blue-900",
    txt_to   : "to-purple-900",
    accent   : "border-l-purple-500/60"
  },
  "khonsu": {
    diety    : KhonsuAI,  
    alt      : "Futuristic Egyptian Diety; Mecha Khonsu",
    bg_from  : "from-blue-300/40",
    bg_to    : "to-yellow-200/75",
    txt_from : "from-blue-300",
    txt_via  : "via-yellow-200",
    txt_to   : "to-blue-300",
    accent   : "border-l-blue-300/60"
  },
  "osiris": {
    diety    : OsirisAI,
    alt      : "Futuristic Egyptian Diety; Mecha Osiris",
    bg_from  : "from-green-200/20",
    bg_to    : "to-yellow-100/50",
    txt_from : "from-green-800",
    txt_via  : "via-yellow-100/60",
    txt_to   : "to-green-800",
    accent   : "border-l-yellow-100/60"
  },
}

const fonts: {
  popup      : ClassValue[],
  title      : ClassValue[],
  subtitle   : ClassValue[],
  content    : ClassValue[],
  stat_title : ClassValue[],
  stat_label : ClassValue[],

  info_title    : ClassValue[],
  info_subtitle : ClassValue[],
  primary_btn   : ClassValue[],
  secondary_btn : ClassValue[],
} = {
  popup: [
    "font-bold uppercase",
    "tracking-[-1px]",
    "text-md/1 3xl:text-xs",
    "landscape-4xl:text-lg",
  ],
  subtitle: [
    "text-lg/1 3xl:text-xl/20",
    "landscape-xs:text-sm/1",
    "landscape-4xl:text-2xl",
  ],
  title: [
    "font-bold",
    "tracking-[-2px]",
    "text-4xl 3xl:text-6xl/22",
    "landscape-xs:text-3xl",
    "landscape-4xl:text-7xl/40",
  ],
  content: [
    "font-inter font-light",
    "tracking-[-1px] 3xl:tracking-normal",
    "text-md 4xl:text-base/14",
    "landscape-xs:text-xs/4 landscape-xs:w-full",
    "landscape-4xl:text-xl/15 landscape-4xl:tracking-normal",
  ],
  stat_title: [
    "font-merriweather font-bold",
    "text-lg 4xl:text-2xl",
  ],
  stat_label: [
    "tracking-[-1px]",
    "text-xs 4xl:text-md",
  ],
  info_title: [
    "font-bold tracking-[-1px] ",
    "text-md/20 3xl:text-sm 4xl:text-xl",
  ],
  info_subtitle: [
    "text-xs  3xl:text-xs  4xl:text-sm",
  ],
  primary_btn: [
    "text-base md:text-sm",
    "landscape-xs:text-xs",
    "landscape-4xl:text-xl/40",
  ],
  secondary_btn: [
    "text-xs",
    "landscape-xs:text-xs",
    "landscape-4xl:text-lg/40",
  ],
}

//const content = {
//  popupHeader: "AI-Powered Innovation",
//  subTitle : "Building AI Systems that help",
//  title    : "Businesses Evolve",
//  content  : "We are digital architects of the new age, forging technology that will bridge millennia.",
//};
const content = {
  popupHeader: "AI-Powered Innovation",
  subTitle   : "Transform your Business with",
  title      : "Intelligent Systems",
  content    : "We build cutting-edge AI solutions that automate complex workflows, unlock hidden insights, and accelerate your competitive advantage in the digital economy.",
};


const HeroBackground = ({
  diety,
}:{
  diety: HeroDiety,
}) => {
  return (
    <div className={cn(
      "absolute h-scren w-screen -z-1 inset-0 overflow-x-hidden overflow-y-hidden",
    )}>
      <div className={cn(
        "absolute -z-1 inset-0 bg-gradient-to-br",
        diety.bg_from, "via-black", diety.bg_to,
      )}/>
      <div className={cn(
        "absolute -z-1 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
        diety.bg_from, "via-transparent", diety.bg_to
      )}/>

      <img 
        className={cn(
          "absolute right-0 top-0",
          "transform origin-top-right",
          "scale-140 translate-x-40",
          "xl:scale-110 xl:translate-x-50",
          "2xl:scale-110 3xl:translate-x-5",
          "landscape-sm:scale-50 landscape-sm:-translate-x-0 landscape-sm:translate-y-5",
          "landscape-3xl:scale-180",
          //"3xl:scale-180 "
        )}
        src={diety.diety}
        alt={diety.alt}
      />
    </div>
  );
};
const Stat = ({
  title,
  label,
}:{
  title : string,
  label : string,
}) => {
  return (
    <div id={"hero-stat"} className={cn(
      "text-center"
    )}>
      <span id="hero-stat-number" className={cn(
        "block text-[#8b5cf6]",
        fonts.stat_title
      )}>{title}</span>
      <span id="hero-stat-label" className={cn(
        "mt-1 text-white/70",
        fonts.stat_label,
      )}>{label}</span>
    </div>
  );
};


const HeroContainer = ({
  scrollToSection,
  className,
}:{
  scrollToSection: (sectionId: string) => void,
  className?: ClassValue[] | string | undefined,
}) => {
  return (
    <div id="hero-container" className={cn(className)}>
      <div id="hero-card" className={cn(
        //"lg:ml-64 lg:mr-18 xl:mx-16 2xl:mx-24 ",
        "bg-white/3 backdrop-blur-lg border border-white/10",
        "rounded-[clamp(1rem,5vw,1.5rem)]",
        "p-[clamp(1rem,5vw,3rem)]",
        "overflow-hidden transition-add duration-300 ease-linear",
        "hover:-translate-y-1 hover:shadow-orimary-container",
        "before:content-[''] before:absolute before:inset-0 before:h-0.5  before:rounded-full",
        "hover:before:h-0.75 before:w-full before:transition-all before:duration-300 before:ease",
        "before:bg-linear-to-r before:from-transparent before:via-purple-600/20 before:to-transparent",
        
        "min-w-full min-h-full",
        "flex flex-col justify-around",
        "m-2",
      )}>
        {/** !-- Hero-Card-Title-Subtitle-Content --!**/}
        <div className={cn(
          //"border",
          "relative h-full"
        )}>
          <h2 id="hero-eyebrow" className={cn(
            "text-[#8b5cf6]",
            "mb-[clamp(0.5rem,2vw,1rem)]",
            " opacity-0 animate-slideup-1",
            "ms:max-md:text-center",
            fonts.popup,
          )}>
            {content.popupHeader}
          </h2>
          <h1 id="hero-subtitle" className={cn(
            //"text-md 4xl:text-lg/4",
            "font-medium  font-inter",
            "whitespace-nowrap",
            "text-stone-300 mb-[clamp(1rem,3vw,1.5rem)]",
            "tracking-tighter opacity-0 animate-slideup-2",
            "ms:max-md:text-center",
            fonts.subtitle,
          )} 
          >
            {content.subTitle}<br/>
            <span id="hero-title" className={cn(
              "bg-clip-text text-transparent",
              "bg-gradient-to-br from-purple-500 to-blue-900",
              "font-semibold font-merriweather",
              "tracking-[-0.05em]",
              "opacity-0 animate-slideup-2",
              "ms:max-md:text-center",
              fonts.title,
            )}>{ content.title }</span>
          </h1>

          <p id="hero-content" className={cn(
            "md:mr-16",
            "leading-clamp-p",
            "text-white/80",
            "opacity-0 animate-slideup-3",
            "4xl:mt-12",
            "ms:max-md:text-center",
            fonts.content,
            //"mt-[clamp(1rem,3.0vw,5.5rem)]",
          )}>
            { content.content }
          </p>

          {/** !-- Hero-Card-CTA --!**/}
          <div id="hero-cta" className={cn(
            "flex flex-col md:flex-row",
            "mt-[clamp(1rem,0.8621rem+0.6897vw,2.5rem)]",
            //"mt-[clamp(1rem,2.5vw,2.5rem)]",
            "landscape-xs:mt-1",
            "opacity-0 animate-slideup-4",
            "ms:max-md:justify-end",
            "h-1/2 mm:max-ml:h-3/6 md:h-auto",
          )}>
            <GradientButton
              id="hero-primary-btn"
              aria-label="Start your AI Journey"
              from="from-purple-600/90"
              to="to-blue-400/90"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "ms:max-md:w-3/4 ms:max-md:mx-auto ms:max-md:items-center",
              )}
            >
              <span className={cn(
                fonts.primary_btn,
              )}>
                Start your AI Journey
              </span>

              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke-width="2" 
                  stroke="currentColor" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
              </svg>
            </GradientButton>
            <GradientButton
              id="hero-secondary-btn"
              from="from-transparent"
              to="to-transparent"
              onClick={() => scrollToSection("work")}
              className={cn(
                "border-transparent hover:border hover:border-white/10 forwar",
                "md:max-4xl:ml-12",
                "ms:max-md:w-2/3 ms:max-md:mx-auto ms:max-md:items-center",
              )}
            >
              <span className={cn(
                "ms:max-md:mx-auto",
                fonts.secondary_btn,
              )}>View our Work</span>
            </GradientButton>
          </div>
        </div>

        <div id="hero-stats-row" className={cn(
          //"grid grid-cols-[repeat(auto-fit,_minmax(70px,_1fr))]",
          //"gap-[clamp(1rem,3vw,2rem)]",
          //"h-2/8",
          "flex flex-row justify-around",
          "pt-[clamp(1.5rem,2vw,2rem)]",
          "mt-[clamp(2rem,5vw,13rem)]",
          "border-t border-t-white/10",
          "opacity-0 animate-slideup-4",
        )}>
        <Stat 
          title={"50+"}
          label={"AI Models Deployed"}
        />
        <Stat 
          title={">99.9%"}
          label={"Uptime Guaranteed"}
        />
        <Stat 
          title={"3x"}
          label={"Avg. ROI Increase"}
        />
        </div>
      </div>
    </div>
  );
};

const InfoContainer = ({
  className,
}:{
  className?: ClassValue[] | string | undefined,
}) => {
  const InfoCard = ({
    id,
    titleColored,
    title,
    subtitle,
    icon,
    flip = false,
  }:{
    id: number;
    titleColored: string;
    title: string;
    subtitle: string;
    icon: ReactNode;
    flip?: boolean;
  }) => {
    return (
      <div id="hero-info-card" className={cn(
        "group cols-span-2",
        "bg-white/3 backdrop-blur-xl border border-white/10",
        "rounded-[clamp(12px,2vw,16px)] p-[clamp(1rem,2.5vw,1.5rem)]",
        "overflow-hidden cursor-pointer w-full",
        "transition-all duration-300 ease",
        "hover:-translate-y-1 hover:scale-102 hover:border-[rgba(139,92,246,0.3)]",
        //id == 1 && `animate-slideright-1`,
        //id == 2 && `animate-slideright-2`,

        "before:content-[''] before:absolute before:inset-0 before:h-0.25",
        "before:bg-linear-to-r before:from-transparent before:via-purple-500/50 before:to-transparent",
        "after:content-[''] after:absolute after:top-0 after:-left-full after:w-full after:h-full",
        "after:bg-linear-to-r after:from-transparent after:via-white/10 after:to-transparent",
        "after:transition-[left] after:duration-300 after:ease",
        "hover:after:left-full",
      )}>
        <div id="hero-info-icon" className={cn(
          "absolute top-[clamp(0.75rem,2vw,1rem)]",
          "right-[clamp(0.75rem,2vw,1rem)]",
          "size-[clamp(16px,2.5vw,96px)]",
          "opacity-30 transition-all duration-300 ease delay-100",
          "group-hover:opacity-80 group-hover:scale-110"
        )}>
          { icon }
        </div>
        <div id="hero-info-title" className={cn(
          "font-bold text-white/70",
          "mb-[clamp(0.25rem,1vw,0.5rem)] leading-tight z-2",
          fonts.info_title
        )}>
          {!!flip && title + " " }
          <span className={cn(
            "bg-linear-to-br from-[#8b5cf6] to-[#06b5cf6]",
            "bg-clip-text text-transparent",
          )}>{ titleColored }</span>
          {!!!flip && " " + title}
        </div>
        <div id="hero-info-subtitle" className={cn(
          //"text-[clamp(0.75rem,1.8vw,0.875rem)]",
          "text-white/70 leading-snug z-2",
          fonts.info_subtitle,
        )}>
          { subtitle }
        </div>
      </div>
    );
  };

  return (
    <div id="hero-info-card-container"  className={cn(className)}>
      <InfoCard 
        id={1}
        titleColored="Cutting-Edge"
        title="Solutions"
        subtitle="Keeping up with cutting Edge AI Solutions made easy"
        icon={
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                fill="rgba(139, 92, 246, 0.2)"
              />
          </svg>}
      />
      <InfoCard 
        id={2}
        titleColored="Cutting-Edge"
        title="Solutions"
        subtitle="Keeping up with cutting Edge AI Solutions made easy"
        flip
        icon={
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="currentColor"
                stroke-width="2" 
                fill="rgba(6, 182, 212, 0.2)"/>
              <path 
                d="M8 12L11 15L16 9"
                stroke="currentColor"
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"/>
          </svg>
        }
      />
    </div>
  );
};


const Hero = ({
  scrollToSection,
}:{ 
  scrollToSection: (sectionId: string) => void,
}) => {
  const [theme, setTheme] = useState<HeroTheme|null>(null);
  const [hero, setHero] = useState<HeroDiety| null>(null);

  useEffect(() => {
    if(theme !== null) return;
    const choices: HeroTheme[] = ['anubis', 'khonsu', 'osiris'];
    const pick = Math.floor(Math.random() * 3);
    //setTheme(choices[pick]);
    setTheme("anubis")
  }, []);

  useEffect(() => {
    if( theme === "anubis"){
      setHero(HeroDieties["anubis"])
    } else if( theme === "khonsu" ){
      setHero(HeroDieties["khonsu"])
    } else if( theme === "osiris" ){
      setHero(HeroDieties["osiris"])
    }
  }, [theme]);



  if( theme === null || hero === null ) return;

  return (
    <section id="hero" className={cn(
      "h-full w-screen",
      "rows-span-6",
      "grid",
      "grid-cols-32",
      "grid-rows-32",
      "overflow-x-clip",
    )}>
      <HeroBackground diety={hero}/>

      {/* !-- Top/Card --!*/}
      <HeroContainer 
        scrollToSection={scrollToSection}
        className={cn(
          "col-start-1 col-end-32",
          "row-start-6 row-end-22",

          "lg:col-span-30",
          "lg:row-span-20",

          "xl:col-span-20",
          "xl:row-span-32",

          "2xl:col-start-2 2xl:col-end-18",
          "2xl:row-start-6 2xl:row-end-24",
          "4x:col-start-2 4xl:col-end-17",

          "landscape-xs:col-start-1 landscape-xs:col-end-20",
          "landscape-xs:row-start-8 landscape-xs:row-end-30",
          "landscape-4xl:row-start-8 landscape-4xl:row-end-30",

          "flex flex-col mx-3",
          //"justify-end xl:justify-center",
          //'border'
        )}
      />

      <InfoContainer className={cn(
        "flex flex-around",

        "col-start-2 col-end-31",
        "row-start-23 row-end-28",
        "lg:row-span-4 lg:row-start-28",
        "2xl:row-start-26 2xl:row-end-30",
        "2xl:col-start-17 2xl:col-end-34",

        "landscape-xs:flex-col",
        "landscape-xs:col-start-20 landscape-xs:col-end-33",
        "landscape-xs:row-start-9 landscape-xs:row-end-30",

        "landscape-4xl:col-start-20 landscape-4xl:col-end-32",

        "font-inter",

        //"flex flex-row",
        //"grid grid-cols-4",
        "gap-[clamp(0.75rem,2vw,1rem)] z-10",
        //"border"
      )}/>
      {/* !-- Bottom/InfoCards --!*/}
    </section>
  );
};

export default Hero;
