import { useRef } from "react";
import CardContainer from "~/components/card";
import { cn } from "~/utils/cn";
import type { CardData } from "~/components/card";

const Projects: CardData[] = [
  {
    id: 0,
    title: "Project One",
    description: "Project One description.",
    color: "from-purple-500/50 to-cyan-500/50",
  },
  {
    id: 1,
    title: "Project Two",
    description: "Project Two description.",
    color: "from-purple-500/50 to-blue-500/50",
  },
  {
    id: 2,
    title: "Project Three",
    description: "Project Three description.",
    color: "from-purple-500/50 to-green-500/50",
  },
  {
    id: 3,
    title: "Project Four",
    description: "Project Four description.",
    color: "from-purple-500/50 to-red-500/50",
  },
];

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "bg-black flex flex-col justify-center items-center h-screen w-screen",
        "pb-96"
      )}
    >
      <h1 className={cn(
        "text-4xl md:text-5xl font-bold mb-12 text-center"
      )}>Our Work</h1>
      <CardContainer
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
          "w-full px-4 lg:px-0 lg:w-4/5 xl:w-2/3 max-h-full gap-8"
        )}
        containerRef={containerRef}
        cards={Projects}
      />
    </div>
  );

  //return (
  //  <section id="work" className="py-20 px-6 h-[100vh] bg-gray-900/30 flex flex-col justify-center">
  //    <div className="max-w-6xl mx-auto">
  //      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Work</h2>
  //      <div className="text-center text-gray-400 mb-12">
  //        <p className="text-lg">Currently taking on our first contract work!</p>
  //        <p className="mt-4">Stay tuned for exciting AI solutions coming soon.</p>
  //      </div>
  //      <div className="grid md:grid-cols-2 gap-8">
  //        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative overflow-hidden">
  //          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
  //          <h3 className="text-2xl font-semibold mb-4">AI System Development</h3>
  //          <p className="text-gray-400 mb-4">Currently working on our first major AI system implementation for a client.</p>
  //          <div className="inline-flex items-center text-purple-400">
  //            <span className="mr-2">In Progress</span>
  //            <div className="flex space-x-1">
  //              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
  //              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
  //              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
  //            </div>
  //          </div>
  //        </div>
  //        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-dashed border-gray-700 flex items-center justify-center">
  //          <div className="text-center">
  //            <div className="text-6xl mb-4">🚀</div>
  //            <p className="text-gray-500">More projects coming soon</p>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //  </section>
  //)
};

export default Portfolio;
