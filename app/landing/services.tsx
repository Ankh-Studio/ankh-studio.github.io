import type { ClassValue } from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "~/utils/cn";

const ServiceDetails = [
  {
    title: "AI-Powered Workflow Automation",
    summary: "Automate internal workflows using advanced AI tools to enhance operational efficiency.",
    details: "We integrate state-of-the-art AI APIs to reduce manual tasks, optimize processes, and enable faster decision-making across your organization.",
  },
  {
    title: "AI Assistant Development",
    summary: "Custom AI assistants designed for specific business functions and internal use cases.",
    details: "Our assistants are built using cutting-edge language models to support internal knowledge bases, customer service, and sales operations through intuitive, natural interactions.",
  },
  {
    title: "Enterprise Integration & Deployment",
    summary: "Seamlessly embed AI systems into your existing tools and enterprise infrastructure.",
    details: "From CRMs to ERPs and dashboards, we ensure smooth integration of AI solutions with a focus on security, scalability, and regulatory compliance.",
  },
  {
    title: "AI Productivity Toolkits",
    summary: "Custom AI tools that optimize team output and streamline day-to-day business operations.",
    details: "We build smart summarizers, automated note takers, and intelligent task assistants designed to reduce bottlenecks and elevate team productivity.",
  },
  {
    title: "AI-Augmented Data Interaction",
    summary: "Enable natural language interaction with business data to drive insights and action.",
    details: "We create tools that let non-technical users query and analyze data effortlessly—embedding AI into internal workflows for real-time decision support.",
  },
  {
    title: "Secure AI Enablement & Governance",
    summary: "Implement AI responsibly with secure and compliant deployment strategies.",
    details: "Our services ensure AI tools meet enterprise-grade security, governance, and compliance requirements—especially in regulated or data-sensitive environments.",
  },
];

const GlowBorder = ({
  className,
  children,
}:{
  className? : ClassValue,
  children?  : ReactNode,
}) => {
  return (
    <div className={cn(
      "relative",
      className,
    )}>
        <div className={cn(
          "absolute -inset-3 ",
          "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
          "rounded-lg blur-2xl opacity-40 animate-gradient-x"
        )}/>
        <div className={cn(
          "absolute -inset-2",
          "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
          "rounded-lg blur-lg opacity-60 animate-gradient-x"
        )}/>
        {/* Border */}
        <div className={cn(
          "relative p-[3px] rounded-lg",
          "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500",
          "animate-gradient-x",
        )}>
        {/*
            <div className="bg-black rounded-lg p-8">
            <p>Multiple blur layers create an intense glow effect.</p>
            </div>
          */}
        { children }
        </div>
    </div>
  )
};

type Border = "top"|"left"|"right"|"bottom";

const GlowingBorder = ({
  className,
  children,
  border = [],
}:{
  className? : ClassValue,
  children?  : ReactNode,
  border?    : Border[] | "all" 
}) => {
  const [borders, setBorders] = useState<string|null>(null);

  useEffect(() => {
    if( borders !== null ) return;
    if( border == "all" ){
      setBorders(["top","left","right","bottom"].map(b => `border_${b}`).join(" "))
      return
    }
    setBorders(border.map(b => `border_${b}`).join(" "))
  }, []);

  return (
    <div className={cn(
      borders,
      className,
    )}>
      { children }
    </div>
  )
};

const Services = () => {
      //<div className="h-full w-1/5 bg-black"/>
      //  <GlowingBorder className="h-full w-3/5">
      //    <div className={"w-full h-full bg-black flex flex-col justify-center"}>
      //    </div>
      //  </GlowingBorder>
      //<div className="h-full w-1/5 bg-black"/>

  return (
    <section id="services" className="service_container relative min-h-screen py-20 px-6 red">

     <div className="absolute flex flex-row inset-0 w-full h-full -z-1">
      <div className="h-full w-1/8 bg-black"/>

        <div className="bg_container h-full w-3/4">
          <GlowingBorder
            className="A w-full"
            border={["top", "left", "right"]}
          >
            <div className="bg_center_outter w-full h-full bg-black"/>
          </GlowingBorder>

          <GlowingBorder className="B h-full" border={["left"]}>
            <div className="bg_center_outter w-full h-full bg-black"/>
          </GlowingBorder>

            <GlowingBorder 
              className="Z"
              border={["top", "left", "right", "bottom"]}
            >
              <div className="bg_center_inner w-full h-full"/>
            </GlowingBorder>


          <GlowingBorder className="C h-full " border={["right"]}>
            <div className="bg_center_outter w-full h-full bg-black"/>
          </GlowingBorder>
          <GlowingBorder className="D w-full " border={["left", "right", "bottom"]}>
            <div className="bg_center_outter w-full h-full bg-black"/>
          </GlowingBorder>
        </div>

      <div className="h-full w-1/8 bg-black"/>
     </div>

     <div className="max-w-6xl mx-auto">
       <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center text-purple-200">Our Services</h2>
       <div 
         className="grid md:grid-cols-2 gap-8"
       >
         {ServiceDetails.map((service, index) => (
           <div
             key={index}
             className={cn(
               "bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 cursor-pointer",
               "border border-gray-800 hover:border-purple-500/50",
               "transition-all duration-300 hover:transform hover:scale-105"
             )}
           >
             <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
               {service.title}
             </h3>
             <p className="text-gray-400">{service.summary}</p>
           </div>
         ))}
       </div>

     </div>
    </section>
  )
};

export default Services;
