import { MouseEventHandler, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useBreakpointContext } from "@/hooks/useBreakpointContext";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Settings } from "@/components/AnkhTeam/data";
import { cn } from "@/lib/utils";

type TeamImageProps = {
  url      : string;
  name     : string;
  hover    : boolean;
  color    : string;
  isActive : boolean;
  onClick  : MouseEventHandler<HTMLDivElement> | undefined,
};

export const TeamImage = ({
  url,
  name,
  hover,
  color,
  isActive,
  onClick,
}: TeamImageProps) => {
  const {
    bpFilter,
  } = useBreakpointContext();
  const {
    getColor,
  } = useThemeContext();
  const [fullName, setFullName] = useState<{first: string, last: string} | null>(null);

  const sizes = {
    img: 25,
    curve: 50,
  };
  const borderOffset = Math.abs((sizes.curve - sizes.img)) / 2;

  useEffect(() => {
    const parts = name.split(' ');
    setFullName({
      first: parts[0],
      last: parts[1]
    });
  }, []);

  const hoverSelect = (active: any, inactive: any): any => {
    return bpFilter({
      mobile: active,
      tablet: active,
      desktop: hover || isActive ? active : inactive,
    });
  };

  const imageDisplay = {
    animate:  bpFilter({
      mobile: {},
      tablet: {
        filter: Settings.ImgFilterTablet,
      },
      desktop: {
        filter: hoverSelect(
          Settings.ImgFilterOn,
          Settings.ImgFilterOff,
        )
      },
    }),
    transition: bpFilter({
      mobile: {},
      tablet: {},
      desktop: {
        duration: Settings.Duration,
      },
    }),
  };

  if( !fullName ) return;
  return (
    <motion.div 
      key={`${name}_image`}
      className={cn(
        "FounderImage",
      )}
      style={{
        height    : `${Settings.ImgSize}vw`,
        width     : `${Settings.ImgSize}vw`,
        transform : 'scale(0.95)',
      }}
      onClick={onClick}
    >
      <motion.div 
        className="FounderImage_src"
        style={{
          backgroundImage : url,
        }}
        { ...imageDisplay }
      />
      <motion.div 
        className={cn(
          "FounderImage_overlay",
          hoverSelect("ShowOverlay", ""),
        )}
        style={{
          backgroundImage  : url,
          WebkitTextStroke : `5px ${getColor(color)}2F`,
        }}
      >
        {/* Overlay Curved UI */}
        <motion.div 
          className={cn(
            hoverSelect("ShowOverlay", ""),
          )}
          style={{
            position     : 'absolute',
            borderRadius : '100%',
            width        : `${sizes.curve}vw`,
            height       : `${sizes.curve}vw`,
            transform    : `translateY(${borderOffset+2.5}vw) translateX(-${borderOffset}vw)`,
            borderTop       : `2px solid ${getColor(color)}20`,
          }}
        />
        <motion.div 
          style={{
            width        : `${sizes.curve}vw`,
            height       : `${sizes.curve}vw`,
            transform    : `translateY(-${borderOffset+2.5}vw) translateX(-${borderOffset}vw)`,
            position     : 'absolute',
            borderRadius : '100%',
            borderBottom : `2px solid ${getColor(color)}20`,
          }}
          animate={{ 
            opacity: bpFilter({
              desktop: hoverSelect(1, 0),
              defaultStyle: 1
            })
          }}
          transition={{
            duration: Settings.Duration,
            delay: Settings.Duration,
            ease: [0.0, 0.25, 0.75, 1],
          }}
        />
        <h1>{ fullName["first"] }</h1>
        <h1>{ fullName["last"] }</h1>
      </motion.div>
    </motion.div>
  );
};
