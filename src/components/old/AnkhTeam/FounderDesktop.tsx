import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useBreakpointContext } from "@/hooks/useBreakpointContext";
import { useThemeContext } from "@/hooks/useThemeContext";
import { Settings, Founder } from "@/components/AnkhTeam/data";
import { TeamImage } from "./TeamImage";

type FounderDestopProps = {
  index: number;
  activeMember: number|null;
  setActiveMember: (index: number|null) => void;
  name: string;
  founder: Founder;
  className?: string;
};

export const FounderDesktop = ({
  index,
  name,
  founder,
  activeMember,
  setActiveMember,
}: FounderDestopProps) => {
  const {
    bpFilter,
  } = useBreakpointContext();

  const {
    getColor,
  } = useThemeContext();
  const isActive = activeMember === index;

  const [hover, setHover] = useState<boolean>(false);

  const handleClick = () => {
    if( isActive ){
      setActiveMember(null)
    } else {
      setActiveMember(index);
    }
  };

  const containerDisplay = {
    initial: bpFilter({
      tablet: {
        width: '90vw',
      },
      desktop: {
        width: `${Settings.ImgBorder}vw`,
      },
    }),
    animate: bpFilter({
      desktop: {
        width: isActive ? `${Settings.ImgSize*3.2}vw` : `${Settings.ImgSize}vw`,
      }
    }),
    transition: bpFilter({
      desktop: {
        duration: Settings.Duration,
      },
    }),
  };

  return (
    <motion.div 
      className="Founder"
      style={{
        pointerEvents: isActive || activeMember === null ? "auto" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div 
        className={cn(
          "Founder_wrap",
        )}
      >
        <motion.div 
          className={cn(
            "Founder_container",
          )}
        >
          <TeamImage 
            url={founder.Img}
            name={founder.Name}
            hover={hover}
            color={founder.Color}
            isActive={isActive}
            onClick={handleClick}
          />

          <div className="FounderInfo"
            style={{ height: `${Settings.ImgSize}vw` }}
          >
            <div 
              className={cn(
                "FounderInfo_title",
                "border-b border-Dark-TextSecondary rounded-3xl",
              )}
            >
              <h1 
                className={cn(
                  `text-${founder.Color}`,
                  "border-l border-Dark-TextSecondary rounded-3xl"
                )}
              >{name.toUpperCase()}</h1>
            </div>
            {/* FOUNDER DESCRIPTION */}
            <div className={"FounderInfo_description"}>
              <h2 style={{
                color: `${getColor(founder.Color)}`,
              }}>
                { founder.Desc }
              </h2>

              <h3 style={{
                color: `${getColor(founder.Color)}`,
              }}> 
                { founder.Name }
              </h3>
            </div>

            {/* FOUNDER MANTRA */}
            <div className={cn(
              "FounderInfo_mantra",
              "border-t rounded-3xl border-Dark-TextSecondary "
            )}>
              <h2 className={cn(
                `text-${founder.Color}`,
                "border-l border-Dark-TextSecondary",
              )}>
                { `"${founder.Mantra}"` }
              </h2>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
