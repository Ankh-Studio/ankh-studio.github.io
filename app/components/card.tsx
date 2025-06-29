import type { ClassValue } from "clsx";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/utils/cn";

type Position = {x: number, y: number};

export type CardData = {
  id           : number;
  title        : string;
  description  : string;
  color        : string;
};

type CardProps = {
  activeCard   : number|null;
  mousePos     : Position,
} & CardData;

const RotatingSquare = ({color}: {color: string}) => (
  <svg viewBox="0 0 64 64" className={cn(
    "w-full h-full", color
  )}>
    <path 
      d="M32 8 L48 24 L32 40 L16 24 Z" 
      fill="currentColor" 
      opacity="0.7"
    >
      <animateTransform 
        attributeName="transform" 
        type="rotate" 
        values="0 32 32;180 32 32;360 32 32" 
        dur="3s" 
        repeatCount="indefinite" 
      />
    </path>
  </svg>
)

const LargeSquare = ({
  from,
  to,
}:{
  from: string,
  to: string
}) => (
  <div className={cn(
    //"from-blue-400 to-cyan-400 ",
    "w-full h-full bg-gradient-to-br",
    from, to,
    "rounded-2xl backdrop-blur-sm opacity-70 animate-pulse"
  )} />
);

const MorphSquare = ({
  isActive,
  from,
  to,
}:{
  isActive : boolean,
  from     : string,
  to       : string,
}) => (
  <div 
    className={cn(
      //"from-green-400 to-emerald-400",
      "w-full h-full bg-gradient-to-br",
      from, to,
      "rounded-lg transform-gpu"
    )}
    style={{
      transform: `perspective(100px) rotateX(${isActive ? '25deg' : '0deg'}) rotateY(${isActive ? '25deg' : '0deg'})`,
      transition: 'transform 0.5s ease'
    }}
  />
);

const Circle = ({
  isActive,
  mousePos,
  from,
  to,
}:{
  isActive : boolean,
  mousePos : Position,
  from     : string,
  to       : string,
}) => (
  <div className="relative w-full h-full">
    <div 
      className={cn(
        //"from-orange-400 to-red-400",
        "absolute inset-0 bg-gradient-to-br",
        from, to,
        "rounded-full transition-all duration-300"
      )}
      style={{
        transform: isActive ? 
          `translate(${(mousePos.x - 50) * 0.2}px, ${(mousePos.y - 50) * 0.2}px) scale(1.1)` : 
          'translate(0px, 0px) scale(1)'
      }}
    />
  </div>
);

const Card = ({
  activeCard,
  mousePos,
  id,
  title,
  description,
  color,
}: CardProps) => {
  const Shape = () => {
    if( id % 4 === 0 ){
      return <RotatingSquare color="text-purple-400"/>
    }
    if( id % 4 === 2 ){
      return <LargeSquare from="from-blue-400" to="to-cyan-400"/>
    }
    if( id % 4 === 3 ){
      return  <MorphSquare isActive={activeCard === id} from="from-purple-400" to="to-blue-500"/>
    }
    if( id % 4 === 4 ){
      return <Circle 
        isActive={activeCard === id}
        mousePos={mousePos}
        from="from-blue-400" 
        to="to-cyan-400"
      />
    }
  }

  return (
    <div className={cn(
      "relative p-8 rounded-3xl overflow-hidden",
      "backdrop-blur-xl bg-black/10 border border-black/20 shadow-2xl"
    )}>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br",
        color,
        "opacity-20 transition-opacity duration-500",
        activeCard === id ? 'opacity-40' : 'opacity-20'
      )}/>
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-3xl transition-all duration-500"
        )}
        style={{
          transform: activeCard === id
            ? `translate(${(mousePos.x - 50) * 10.9}px, ${(mousePos.y - 50) * 0.1}px)`
            : `translate(0px, 0px)`,
        }}
      />
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 relative">
          <svg viewBox="0 0 64 64" className="w-full h-full text-purple-400">
            <path 
              d="M32 8 L48 24 L32 40 L16 24 Z" 
              fill="currentColor" 
              opacity="0.7"
            >
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                values="0 32 32;180 32 32;360 32 32" 
                dur="40s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
        </div>

        <h3 className={cn(
          "text-2xl font-bold text-white mb-3 transition-all duration-300",
          "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400/70 group-hover:to-blue-500/60 group-hover:bg-clip-text"
        )}>
          { title }
        </h3>

        <div className={
          "w-full h-72 border border-white/20 rounded-xl mb-4 p-4"
        }>
          <p className={cn(
            "text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight"
          )}>
            { description }
          </p>
        </div>


        <div className={
          "mt-6 h-1 bg-white/20 rounded-full overflow-hidden"
        }>
          <div className={cn(
            "h-full rounded-full transition-all duration-1000 bg-gradient-to-r",
            color,
            activeCard === id ? 'w-full' : 'w-0',
          )}/>
        </div>
      </div>

      <div 
        className={"absolute top-4 right-4 w-3 h-3 bg-purple-500/50 rounded-full animate-bounce"}
        style={{ animationDelay: `${id * 0.2}s`}}
      />
      <div 
        className={"absolute bottom-4 left-4 w-2 h-2 bg-purple-500/20 rounded-full animate-pulse"}
        style={{ animationDelay: `${id * 0.3}s`}}
      />
    </div>
  );
};

const CardContainer = ({
  className,
  containerRef,
  cards,
}:{
  className    : ClassValue,
  containerRef : React.RefObject<HTMLDivElement | null>,
  cards        : CardData[],
}) => {
  const [activeCard, setActiveCard] = useState<number|null>(null);
  const [mousePosition, setMousePosition] = useState<Position>({x:0,y:0});
  //const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className={`${className}`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative"
          onMouseEnter={() => setActiveCard(card.id)}
          onMouseLeave={() => setActiveCard(null)}
          style={{
            transform: activeCard === card.id 
              ? `translateY(-10px) rotateX(5deg) rotateY(${(mousePosition.x - 25)  * 0.1}deg)`
              : 'translateY(0px) rotateX(0deg) rotateY(0deg)',
            transition: `transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
          }}
        >
          <Card 
            activeCard={activeCard}
            mousePos={mousePosition}
            id={card.id}
            title={card.title}
            description={card.description}
            color={card.color}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            card.color,
            "rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-2"
          )}/>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
