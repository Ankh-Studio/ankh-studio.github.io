import { useEffect, useMemo, useRef, useState } from "react";
import BGParticles from "~/components/bg_particles";
import { cn } from "~/utils/cn";

type Position = {x: number, y: number};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<Position>({x:0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log("MOUSE MOVE!")
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const particles = useMemo(() => (
    <BGParticles 
        speed={0.01}
        size={4}
        total={100}
    />
  ), []);

  const codeAnimation = useMemo(() => (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-3xl opacity-20"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
        <div className="space-y-4">
          <div className="h-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded animate-pulse delay-75"></div>
          <div className="h-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded animate-pulse delay-150"></div>
          <div className="flex space-x-2 mt-6">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping delay-75"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section id="about" className={cn(
      "about_container  py-20 px-6 relative",
      "mb-[60vh] sm:mb-0"
    )}>
    { particles }
      <div className={cn(
        "absolute inset-0 w-screen h-screen",
      "bg-gradient-to-tr via-purple-900/2 from-black to-blue-900/20",

      )}/>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center">About Ankh Studio</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Ankh Studio is at the forefront of AI innovation, specializing in creating custom AI systems that solve real-world business challenges. Our team combines deep technical expertise with strategic thinking to deliver solutions that make a meaningful impact.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We believe in the transformative power of artificial intelligence and are committed to making it accessible and valuable for businesses of all sizes. From concept to deployment, we partner with our clients to ensure their AI journey is successful.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">3</div>
                <div className="text-sm text-gray-400">Expert Founders</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">AI</div>
                <div className="text-sm text-gray-400">Focused</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400">Possibilities</div>
              </div>
            </div>
          </div>
          { codeAnimation }
        </div>
      </div>
      <div className="about_background top-border-saw"/>
    </section>
  );
};

export default About;
