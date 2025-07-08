import { useEffect, useRef, useState, type MouseEventHandler } from "react";
import { cn } from "~/utils/cn";

type Particle = {
  id       : number;
  x        : number;
  y        : number;
  size     : number;
  speedX   : number;
  speedY   : number;
  xForward : number;
  yForward : number;
  opacity  : number;
};

type ParticlesProps = {
  speed : number;
  size  : number;
  total : number;
}


const BGParticles = ({
  speed,
  size,
  total,
}: ParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);


  useEffect(() => {
    const createParicle: () => Particle = () => ({
      id       :  Math.random(),
      x        :  Math.random() * 100,
      y        :  Math.random() * 100,
      size     :  Math.random() * size + 1,
      speedX   : (Math.random() - speed) * speed,
      speedY   : (Math.random() - speed) * speed,
      xForward : Math.random() < 0.5 ? -1 : 1,
      yForward : Math.random() < 0.5 ? -1 : 1,
      opacity  :  Math.random() * 0.5  + 0.1,
    });
    setParticles(
      Array.from({ length: total }, createParicle)
    );

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX*particle.xForward + 100) % 100,
        y: (particle.y + particle.speedY*particle.yForward + 100) % 100,
      })));
    }, 1000/60);

    return () => clearInterval(interval);
  }, []);


  return (
    <div 
      ref={containerRef}
      className={
        "absolute inset-0 h-[100vh] w-[100vw] overflow-hidden will-change-transform"
      }
    >
      <div className={cn(
        "absolute inset-0 bg-radial-[at_33%_50%]",
        "from-purple-500/20 from-0% to-transparent to-70%  w-full h-full"
      )}/>
      {particles.map(particle => (
        <div 
          key={particle.id}
          className={cn(
            "absolute w-1 h-1 bg-radial rounded-full animate-pulse",
            "bg-white/10  pointer-events-none",
          )}
          style={{
            left: `${particle.x}%`,
            top:  `${particle.y}%`,
            opacity: particle.opacity,
            transform: `scale(${particle.size})`,
          }}
        />
      ))}
    </div>
  );
};

export default BGParticles;
