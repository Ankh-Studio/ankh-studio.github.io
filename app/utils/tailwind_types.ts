type Name = 
  | 'amber'  | 'blue'  | 'cyan'   | 'emerald' | 'fuchsia'
  | 'gray'   | 'green' | 'indigo' | 'lime'    | 'neutral'
  | 'orange' | 'pink'  | 'purple' | 'red'     | 'rose'
  | 'sky'    | 'slate' | 'stone'  | 'teal'    | 'violet'
  | 'yellow' | 'zinc';

type Level = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type StandardColor = 
  | `${Name}-${Level}`
  | 'inherit'
  | 'current'
  | 'transparent'
  | 'black'
  | 'white';

type CustomColor   = `[${string}]`;
type TailwindColor = StandardColor | CustomColor

export type BackgroundColor = `bg-${TailwindColor}`;
export type TextColor       = `text-${TailwindColor}`;
export type FromColor       = `from-${TailwindColor}`;
export type ViaColor        = `via-${TailwindColor}`;
export type ToColor         = `to-${TailwindColor}`;

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



