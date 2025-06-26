import type { ClassValue } from "clsx";
import { useEffect, useState, type ReactNode } from "react";


type Point = [number, number];
interface PyramidProps {
  width?     : number;
  startY?    : number;
  middleY?   : number;
  segments?  : number;
  gap? : number;
  className? : ClassValue,
  children?  : ReactNode,
}

export const Pyramid = ({
  width     = 100,
  startY    = 88,
  middleY   = 100,
  segments  = 16,
  gap = 1.0,
  className,
  children,
}: PyramidProps ) => {
  const [ polygons, setPolygons ] = useState<Point[]>([]);

  useEffect(() => {

    let curX = width
    let curY = startY;
    let midY = middleY;
    let space = 0.5;
    let isSpace = true;

    const pgons: Point[] = [];

    for(let i = 0; i < segments; i++){
      pgons.push([curX, curY]);
      pgons.push([50, midY]);
      curX = curX == width ? 0 : width
      pgons.push([curX, curY]);

      isSpace = !isSpace
      if( !isSpace ){
        gap *= 1.05
        midY -= midY*0.1618
      } else {
        curY -= space;
      }
    }
    pgons.push([curX, curY])
    setPolygons(pgons);
  }, []);

  return (
    <div 
      className={`${className}`}
      style={{
        clipPath: `polygon(${polygons.map( (p) => `${p[0]}% ${p[1]}%`).join(", ")})`,
      }}
    >
      { children }
    </div>
  );
};


