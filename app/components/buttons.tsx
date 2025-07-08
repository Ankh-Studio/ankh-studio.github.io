import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import { cn } from "~/utils/cn";
import type { FromColor, ToColor, ViaColor } from "~/utils/tailwind_types";

type GradientElementProps = {
  from?     : FromColor;
  to?       : ToColor;
  children? : ReactNode;
  via?      : ViaColor;
  hoverVia? : ViaColor;
  className?: ClassValue[] | string | undefined,
};
export type GradientAnchorProps = GradientElementProps & React.HTMLProps<HTMLAnchorElement>;
export type GradientButtonProps = GradientElementProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const GradientElement: ClassValue[] = [
  "inline-flex relative items-center",
  "gap-2 no-underline whitespace-nowrap",
  "cursor-pointer overflow-hidden",
  "p-[clamp(0.75rem,2vw,1rem)_clamp(1.5rem,4vw,2rem)]",
  "text-white font-semibold",
  "rounded-[clamp(0.5rem,2vw,0.75rem)]",
  "bg-gradient-to-br from-purple-600/90 to-blue-400/90",

  "transition-color duration-300 ease",

  "hover:-translate-y-0.5 hover:shadowp-primary-btn hover:overflow-hidden",

  "before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full",
  "before:bg-linear-to-r before:from-transparent",
  "before:via-white/20",
  "before:to-transparent",
  "before:transition-[left] before:duration-500 hover:before:left-full",
];

/**  GradientAnchor: A Stylized `button`. 
 *   
 *   This Anchor by default used our Primary and Accent colors.
 *   This button also has stylized a hover animation. Since this component wraps
 *   around `HTMLAnchorElement`;
 *
 *   ARGUMENTS:
 *      - from?: `FromColor`    | Overwrites the default `from-COLOR` for the buttons background gradient.
 *      - via?:  `ViaColor`     | Adds a  `via-COLOR` for the buttons background gradient.
 *      - from?: `ToColor`      | Overwrites the default `to-COLOR` for the buttons background gradient.
 *      - hoverVia?: `ViaColor` | Overwrites the Anchors Hover Animated Streak color.
 *
 *    All other Tailwind properies can also be overwritten is wanted, by adding the class properties to 
 *    the className for `GradientAnchor`
 **/
export const GradientButton = ({
  from,
  to,
  via,
  hoverVia,
  children,
  className,
  ...props
}: GradientButtonProps) => {
  return (
    <button
      className={cn(
        GradientElement,
        from, to, via, hoverVia, 
        className,
      )}
      {...props}
    >
      { children }
    </button>
  );
};

/**  GradientAnchor: A Stylized `anchor`. 
 *   
 *   This Anchor by default used our Primary and Accent colors.
 *   This button also has stylized a hover animation. Since this component wraps
 *   around `HTMLAnchorElement`;
 *
 *   ARGUMENTS:
 *      - from?: `FromColor`    | Overwrites the default `from-COLOR` for the buttons background gradient.
 *      - via?:  `ViaColor`     | Adds a  `via-COLOR` for the buttons background gradient.
 *      - from?: `ToColor`      | Overwrites the default `to-COLOR` for the buttons background gradient.
 *      - hoverVia?: `ViaColor` | Overwrites the Anchors Hover Animated Streak color.
 *
 *    All other Tailwind properies can also be overwritten is wanted, by adding the class properties to 
 *    the className for `GradientAnchor`
 **/
export const GradientAnchor = ({
  from,
  to,
  via,
  hoverVia,
  children,
  ...props
}: GradientAnchorProps) => {
  return (
    <a
      href={props.href}
      aria-label={props["aria-label"]}
      onClick={() => props.onClick}
      className={cn(
        GradientElement,
        from, to, via, hoverVia
      )}
    >
      { children }
    </a>
  );
};
