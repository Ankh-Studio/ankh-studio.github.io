import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "~/hooks/windowSize";
import { cn } from "~/utils/cn";

type Service = {
  title: string
  summary: string
  details: string
}

const ServiceDetails: Service[] = [
  {
    title: "Workflow Automation",
    summary: "Automate internal workflows using advanced AI tools to enhance operational efficiency.",
    details: "We integrate state-of-the-art AI APIs to reduce manual tasks, optimize processes, and enable faster decision-making across your organization.",
  },
  {
    title: "Assistant Development",
    summary: "Custom AI assistants designed for specific business functions and internal use cases.",
    details: "Our assistants are built using cutting-edge language models to support internal knowledge bases, customer service, and sales operations through intuitive, natural interactions.",
  },
  {
    title: "Integration & Deployment",
    summary: "Seamlessly embed AI systems into your existing tools and enterprise infrastructure.",
    details: "From CRMs to ERPs and dashboards, we ensure smooth integration of AI solutions with a focus on security, scalability, and regulatory compliance.",
  },
  {
    title: "Productivity Toolkits",
    summary: "Custom AI tools that optimize team output and streamline day-to-day business operations.",
    details: "We build smart summarizers, automated note takers, and intelligent task assistants designed to reduce bottlenecks and elevate team productivity.",
  },
  {
    title: "Augmented Data Interaction",
    summary: "Enable natural language interaction with business data to drive insights and action.",
    details: "We create tools that let non-technical users query and analyze data effortlessly—embedding AI into internal workflows for real-time decision support.",
  },
  {
    title: "Secure Enablement & Governance",
    summary: "Implement AI responsibly with secure and compliant deployment strategies.",
    details: "Our services ensure AI tools meet enterprise-grade security, governance, and compliance requirements—especially in regulated or data-sensitive environments.",
  },
];


const ServiceBackground = () => {
  const maskId = `cutout-mask`;
  const blurBorderFilterId = `blur-border-filter`
  const dotBorderFilterId  = `dot-border-filter`
  const size = useWindowSize();
  const [ radius, setRadius ] = useState<string|number|undefined>(0);
  const glowBorder = 10;
  const dotBorder = 0;


  useLayoutEffect(() => {
    setRadius(size.height/2.1 - glowBorder/2 - dotBorder/2);
  }, [size]);

  const svgCircle = useMemo(() => (
    <svg 
      className="absolute inset-0 pointer-events-none w-full h-full"
    >
      <defs>
        <mask id={maskId}>
          <rect 
            width="100%" 
            height="100%" 
            fill="white" 
          />
          <circle 
            cx="50%"
            cy="50%"
            r={Number(radius) - glowBorder/2}
            fill="black"
          />
        </mask>
        <filter id={blurBorderFilterId}>
          <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={dotBorderFilterId}>
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs> 
      <rect
        width={`${size.width}px`}
        height={`${size.height}px`}
        fill={"black"}
        mask={`url(#${maskId})`}
        opacity={1.0}
        filter={`url(#${blurBorderFilterId})`}
      />
      <circle 
        cy="50%"
        cx="50%"
        r={Number(radius) - dotBorder/2}
        stroke={"hsla(257deg, 100%, 90%, 1)"}
        fill="none"
        strokeWidth={glowBorder}
        strokeDasharray={"none"}
        filter={`url(#${blurBorderFilterId})`}
      />
      <circle 
        cx="50%"
        cy="50%"
        r={radius}
        stroke={"hsla(122deg, 100%, 85%, 0.3)"}
        fill="none"
        strokeWidth={glowBorder}
        strokeDasharray={"8,6"}
        filter={`url(#${dotBorderFilterId})`}
      />
    </svg>
  ), [radius]);

  if( radius === 0 ) return;
  return (
    <>
    <div className="absolute inset-0 flex -z-2 w-full h-full founder-bg" />
    <div className="absolute inset-0 -z-1 w-full h-full will-change-transform transform-gpu">
      { svgCircle }
    </div>
    </>
  );
};

const ServiceCard = ({
  id,
  service,
  activeCard,
  cardsLocked,
  setCardsLocked,
  setActiveCard,
}: {
  id: number,
  service: Service,
  activeCard: number|null,
  cardsLocked: boolean,
  setCardsLocked: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveCard: React.Dispatch<React.SetStateAction<number|null>>,
}) => {
  const isActive = id === activeCard;
  const cardRef = useRef<HTMLDivElement>(null);

  const [lockedSize, setLockedSize] = useState<{width: number, height: number}|null>(null);
  const [positionAbsolute, setPositionAbsolute] = useState<boolean>(false);
  //const [cardsLocked, setCardsLocked] = useState<boolean>(false);
  const [delayZIndex, setDelayZIndex] = useState<boolean>(false);
  const [zIndex, setZIndex] = useState<number>(id+1);

  // When Card first becomes active
  useEffect(() => {
    if( !isActive ) return;
    console.log("LOCKED: Card Selected")
    setPositionAbsolute(true);
    setZIndex(prev => prev+10);
  }, [isActive]);

  // Triggers right after the Card is no longer active
  useEffect(() => {
    if( isActive || !positionAbsolute ) return;

    console.log("LOCKED: Card Deselected")
    if( !delayZIndex ) {
      setZIndex(prev => prev-10);
    }

    const timeout = setTimeout(() => {
      setPositionAbsolute(false);
      if( delayZIndex ) {
        setZIndex(id+1);
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [isActive, positionAbsolute, activeCard]);

  // For keeping Active Carads width when Absolutely positioned:
  const lockCardSize = () => {
    if( !cardRef.current || positionAbsolute ) return;
    setLockedSize({
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight,
    });
  };

  useEffect(() => {
    lockCardSize();
  }, [positionAbsolute]);

  useEffect(() => {
    const handleResize = () => {
      if( activeCard ) setActiveCard(null);
      lockCardSize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const BgAnimatedOrbs = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"/>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-500"/>
    </div>
  );
  const BgGlassReflection = () => (
    <div className={cn(
      "absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"
    )}/>
  );

  const ExpandCollapseIndicator = () => (
    <div className="flex flex-col min-h-30 justify-end">
      <div className="flex justify-end pr-8 mb-8">
        <div className={cn(
          "text-sm text-purple-400 font-medium transition-all duration-300",
          id === activeCard ? 'rotate-180' : 
            activeCard !== null ? 'opacity-5' : '',

        )}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const HoverBorderGlow = () => (
    <div className={cn(
      "absolute inset-0 rounded-2xl opacity-0",
      "transition-opacity duration-300 pointer-events-none",
      activeCard === null ? " group-hover:opacity-100" : "",
    )} 
    >
      <div className={cn(
        "absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-sm"
      )}/>
    </div>
  );

  return (
    <>
      <div 
        ref={cardRef}
        className={cn(
          "group cursor-pointer transition-all",
          "duration-500 ease-out",
          positionAbsolute ? 'card-transition-to-absolute' : 'card-transition-to-relative',
        )}
        style={{
          zIndex: zIndex,
          width: positionAbsolute && lockedSize ? `${lockedSize.width}px` : '',
        }}
        onClick={() => {
          if( cardsLocked) return;

          setCardsLocked(true);

          if( activeCard !== null ){
            setDelayZIndex(true);
            setActiveCard(null);
            return;
          }
          setActiveCard(id);
        }}
      >
        <div className={cn(
          "relative overflow-hidden rounded-2xl backdrop-blur-xl border border-white/20",
          "bg-gradient-to-br from-black/40 via-purple-900/20 to-blue-900/40 shadow-2xl ",
          "transition-all duration-500 ease-out",
          //"min-h-48",
          activeCard === null ? "hover:scale-105 hover:shadow-purple-500/25 hover:border-purple-500/30" : 
            activeCard === id ? "scale-105 shadow-blue-500/30 border-blue-500/40" : 
              "brightness-80 blur-xs hover:blur-[1px] hover:scale-102 hover:shadow-purple-500/10",
        )}>
          <BgAnimatedOrbs />
          <BgGlassReflection />

          <div className="relative px-6 pt-6 pb-3  sm:px-8 sm:pt-6">
            {/* -- Card Title -- */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100/70 mb-4 leading-tight">
              { service.title }
            </h3>

            {/* -- Card Summary -- */}
            <p className="text-gray-300/50 text-sm sm:text-base leading-relaxed mb-4">
              { service.summary }
            </p>


            {/* -- Card Details: Active Only -- */}
            <div className={cn(
              "overflow-hidden transition-all duration-500 ease-out",
              "transtion-all duration-1000 ease-out",
              id === activeCard ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
            )}>
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className={cn(
                  "text-gray-400 text-sm leading-relaxed",
                )}>
                  { service.details }
                </p>
              </div>
            </div>
          </div>
          <HoverBorderGlow />
          <ExpandCollapseIndicator />
        </div>
      </div>
      {/* --- PlaceHolder for when main card becomes Active and absolutey positioned */}
      { positionAbsolute && (
        <div style={{
          width: `${lockedSize?.width}px`,
          height: `${lockedSize?.height}px`,
        }}/>
      )}
    </>
  )
};

const Services = () => {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const [cardsLocked, setCardsLocked] = useState<boolean>(false);

  useEffect(() => {
    if( !cardsLocked ) return;

    const timeout = setTimeout(() => {
      setCardsLocked(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [cardsLocked]);

  return (
    <section id="services" className={cn(
      "service_container relative min-h-screen py-20 px-6",
      "mb-120 md:mb-0"
    )}>
      <ServiceBackground />
      <div className={cn(
        "max-w-6xl 2xl:max-w-[69vw]",
        "mx-auto h-full flex flex-col justify-center",
        "2xl:scale-110"
      )}
        onClick={() => {
          if( !activeCard ) return;
          setActiveCard(null);
        }}
      >
        <h2 className={cn(
          "text-4xl md:text-5xl 2xl:text-8xl ",
          "font-bold mb-12 text-center text-purple-200"
        )}>
          Our Services
        </h2>
        <div className={cn(
          "grid gap-8 md:grid-cols-2 2xl:grid-cols-3",
        )}>
          {ServiceDetails.map((service, index) => (
            <div key={index}>
              <ServiceCard 
                id={index}
                service={service}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                cardsLocked={cardsLocked}
                setCardsLocked={setCardsLocked}
              />

            </div>
          ))}
        </div>
     </div>
    </section>
  )
};

export default Services;
