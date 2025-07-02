import { cn } from "~/utils/cn";
import type { ReactNode } from "react";
import type { FromColor, ToColor, ViaColor } from "~/utils/tailwind_types";
import type { ClassValue } from "clsx";

type GradientTextProps = {
  from_color? : FromColor
  via_color?  : ViaColor
  to_color?   : ToColor
  className?   : ClassValue,
  children?   : ReactNode
}

export const GradientText = ({
  from_color = "from-purple-400",
  via_color  = "via-blue-400",
  to_color   = "to-purple-400",
  className  = "",
  children,
}: GradientTextProps) => {
  return (
    <h1 className={cn(
      "bg-clip-text text-transparent bg-gradient-to-r animate-gradient",
      from_color, via_color, to_color,
      className,
    )}>
    { children }
    </h1>
  )
};
