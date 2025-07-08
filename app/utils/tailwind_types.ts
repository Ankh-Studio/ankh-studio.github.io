type Name = 
  | 'amber'  | 'blue'  | 'cyan'   | 'emerald' | 'fuchsia'
  | 'gray'   | 'green' | 'indigo' | 'lime'    | 'neutral'
  | 'orange' | 'pink'  | 'purple' | 'red'     | 'rose'
  | 'sky'    | 'slate' | 'stone'  | 'teal'    | 'violet'
  | 'yellow' | 'zinc';

type Level = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Opacity = 
  |  5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50
  | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;
  

type StandardColor = 
  | `${Name}-${Level}`
  | 'inherit'
  | 'current'
  | 'transparent'
  | 'black'
  | 'white';

type CustomColor   = `[${string}]`;
export type TailwindColor = StandardColor | `${StandardColor}/${Opacity}` | CustomColor | `${CustomColor}/${Opacity}`

export type BackgroundColor = `bg-${TailwindColor}`  ;
export type BorderColor     = 
  | `border-${TailwindColor}`
  | `border-l-${TailwindColor}`
  | `border-r-${TailwindColor}`
  | `border-t-${TailwindColor}`
  | `border-b-${TailwindColor}`;
export type TextColor       = `text-${TailwindColor}`;
export type FromColor       = `from-${TailwindColor}` | `before:from-${TailwindColor}` | `after:from-${TailwindColor}`;
export type ViaColor        = `via-${TailwindColor}`  | `before:via-${TailwindColor}`  | `after:via-${TailwindColor}`;
export type ToColor         = `to-${TailwindColor}`   | `before:to-${TailwindColor}`   | `after:to-${TailwindColor}`;
export type TWColor   = FromColor | ViaColor | ToColor;

type TextSize = 
  | 'xs'  | 'sm'  | 'base' | 'lg'  | 'xl' 
  | '2xl' | '3xl' | '4xl'  | '5xl' | '6xl'
  | '7xl' | '8xl' | '9xl';

type StandardText         = `text-${TextSize}`;
type CustomPropertyText   = `text-(length:${string})`;
type CustomText           = `text-[${string}]`;

type TextLineHeight  = 
  | `${StandardText}/${number}`
  | `${CustomPropertyText}/${number}`
  | `${CustomText}/${number}`

export type TailwindText    = StandardText | CustomPropertyText | CustomText | TextLineHeight;



