import { useThemeContext } from "@/hooks/useThemeContext";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Founder } from "./data";

type FounderTabletProps = {
  index: number;
  member: string;
  founder: Founder;
  activeMember: number|null;
  setActiveMember: (index: number|null) => void;
};

export const FounderTablet = ({
  index,
  member,
  founder,
  activeMember,
  setActiveMember,
}: FounderTabletProps) => {
  const { getColor } = useThemeContext();
  const isActive = activeMember === index;
  const [hover, setHover] = useState<boolean>(false);

  const handleClick = () => {
    if( isActive ){
      setActiveMember(null);
    } else {
      setActiveMember(index);
    }
  };

  return (
    <div 
      className={cn(
        "FounderTablet",
        activeMember === null
          ? ""
          : activeMember === index
          ? "FounderTabletExpand"
          : "FounderTabletClear"
      )}
      style={{
        pointerEvents: isActive || activeMember === null ? "auto" : "none",
      }}
      onClick={handleClick}
    >
      {/* Background Image */}
        <div 
          className={cn(
            "FounderBG",
          )}
          style={{
            backgroundImage  : founder.Img,
            backgroundSize   : 'contain',
            backgroundRepeat : 'no-repeat',
            border: `8px solid ${getColor(founder.Color)}56`,
            filter: 'sepia(0.25) brightness(0.375)',
          }}
      />
      <div 
        className="FounderCard"
        style={{
          transform: "translateY(-80vw)"
        }}
      >
        <div className={cn("FounderCardBackdrop")}>
          <div 
            className="TextClip"
            style={{
              backgroundImage  : founder.Img,
              backgroundSize   : 'contain',
              backgroundPosition: "2.5rem -5rem",
              backgroundRepeat : 'no-repeat',
              filter: 'sepia(0.25) brightness(0.5)',
            }}
          >
            <h1>{member}</h1>
            <div className={cn(
              "FounderDescription",
              isActive ? "Show" : ""
            )}>
              <h2 style={{
                color: `${getColor(founder.Color)}F6`
              }}>{founder.Desc}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
