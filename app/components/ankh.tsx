import { cn } from "~/utils/cn";
import type { ClassValue } from "clsx";
import React from "react";

export type AnkhProps = {
  className? : ClassValue,
  color?     : string;
  blur?      : number;
  size?      : number;
};

const Ankh = ({
  className,
  color       = "white",
  blur        = 20,
  size        = 100,
}: AnkhProps) => {
  const ankhId  = React.useId();
  const filterid = `filter=${ankhId}`;
  const maskid  = `mask-${ankhId}`;
  const strokeWidth = size * 0.1;

  const Ankhon = ({
    ankhColor = color,
    blurAnkh = false,
    maskId   = "",
  }:{
    ankhColor? : string,
    blurAnkh?  : boolean,
    maskId?    : string,
  }) => {
    const scaler = blurAnkh ? 1.1 : 1.08;
    const [
      cx, cy, rx, ry,
      l1_x1, l1_x2, l1_y1, l1_y2,
      l2_x1, l2_x2, l2_y1, l2_y2,
    ] = [
      size*0.5,
      size*0.35 / scaler,
      size*0.15 * scaler,
      size*0.2  * scaler,

      size*0.5,
      size*0.5,
      size*0.55,
      size*0.90,

      size/4,
      size*0.55,
      size*0.55,
      size*0.75,
    ];

    return <g 
      fill="none" 
      stroke={ankhColor} 
      stroke-width={strokeWidth} 
      stroke-linecap="butt" 
      strokeLinejoin="bevel"
      filter={blurAnkh ? `url(#${filterid})` : ""}
      mask={`url(#${maskId})`}
    >
      <ellipse 
        cx={cx} 
        cy={cy}
        rx={rx}
        ry={ry}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line 
        x1={l1_x1}
        x2={l1_x2}
        y1={l1_y1-175}
        y2={l1_y2-40}
      />
      <line 
        x1={l2_x1}
        y1={l2_x2}
        y2={l2_y1}
        x2={l2_y2}
      />
      {/*
        */}
      <line 
        x1={size*0.40}
        x2={size*0.70}
        y1={size*0.5}
        y2={size*0.75}
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      />
      <line 
        x1={size*0.60}
        y1={size*0.5}
        x2={size*0.30}
        y2={size*0.75}
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      />
    </g>
  };

  return (
    <svg 
      style={{background: color}}
      className={cn(
        className,
      )}
      viewBox={`0 0 ${size} ${size}`} 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
    >
      <defs>
        <mask id={maskid}>
          <Ankhon ankhColor={color} blurAnkh={false}/>
          <Ankhon ankhColor="black" blurAnkh={true}/>
        </mask>
        <filter id={filterid} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={blur}/>
        </filter>
      </defs>

      <Ankhon 
        ankhColor={color} 
        blurAnkh
      />
      <Ankhon 
        ankhColor="black" 
        maskId={maskid}
        />
      <Ankhon 
        ankhColor="black" 
        maskId={maskid}
        />
    </svg>
  );
}

export default Ankh;
