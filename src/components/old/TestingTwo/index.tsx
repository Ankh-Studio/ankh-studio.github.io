import { cn } from "@/lib/utils";
import StarryBackground from "../StarryBackground";
import { Founder, TeamMembers } from "../AnkhTeam/data";
import {MouseEventHandler, useEffect, useState } from "react";
import { lexand } from "@/fonts";

type FounderName = {
  First: string;
  Last: string;
};
type AnkhFounderProps = {
  index: number;
  founder: Founder;
  god: string;
  founderSelected: number|null;
  onMouseDown: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const AnkhOverlay = ({
  god,
  name,
  text,
  isSelected,
}: {
  god        : string;
  name       : string;
  text       : string;
  isSelected : boolean;
}) => {
  return (
    <div 
      className={cn(
        "Founder_name",
        god,
        isSelected && "Selected"
      )}
    >
      <div className={cn(
        "Founder_name_position",
        god,
      )}>
        <h1 
          className={cn(
            lexand.className,
         )}>
          { isSelected ? name : god }
        </h1>
      </div>
    </div>
  );
};

const AnkhFounder = ({
  index,
  founder,
  god,
  founderSelected,
  onMouseDown,
}: AnkhFounderProps) => {
  const isSelected = founderSelected === index;
  const [name, setName] = useState<FounderName|null>(null);

  useEffect(() => {
    const parts = founder.Name.split(" ");
    setName({
      First: parts[0],
      Last: parts[1],
    });
  }, []);

  if( name === null ) return;
  return (
    <div 
      className={cn(
        "Founder",
        god,
        isSelected 
          ? "Selected"
          : founderSelected !== null
          ? "Hide"
          : "",
      )}
      onMouseDown={onMouseDown}
    >
      <div 
        className={cn(
          "Founder_overlay",
          isSelected && "Selected",
        )}
      >
        <AnkhOverlay 
          god={god}
          name={founder.Name}
          text={god}
          isSelected={isSelected}
        />

        <div className={cn(
          "Founder_body",
          isSelected && "Selected",
        )}>
          <div className={"Founder_pillar"}>
            <p>{ founder.Pillar }</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export const TeamAnkh = () => {
  const Founders = Object.entries(TeamMembers);
  const [selectedFounder, setSelectedFounder] = useState<number|null>(null);

  const onClick = (index: number|null = null, founder: Founder|null = null) => {
    setSelectedFounder((prev) => {
      if( prev === index) return null;
      return index;
    });
  };

  return (
    <Wrapper depth={3}>
      <div className={"TeamAnkh"}>
        <TABackground />

        <div className={
          "TeamAnkh_window"
        }>
          <div className={"TeamAnkh_body"}>
            <AnkhTitle />

            <div className={"TeamAnkh_founders"}>
              {Founders.map((([god, founder], index) => {
                return (
                  <AnkhFounder 
                    key={god}
                    index={index}
                    founder={founder}
                    god={god}
                    founderSelected={selectedFounder}
                    onMouseDown={() => onClick(index, founder)}
                  />
                );
              }))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


const AnkhTitle = () => {
  return (
    <div className={
      "TeamAnkh_title"
    }>
      <h1>MEET THE FOUNDERS</h1>
    </div>
  );
};
const TABackground = () => (
  <>
    <div className={
      "absolute top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.2)]"
    }/>
    <StarryBackground />
    <div className={"TA_Blurred"}/>
  </>
);

const Wrapper = ({ 
  depth,
  children,
}:{ 
  depth: number;
  children?: React.ReactNode;
}) => {
  const height = Math.max(depth, 1) * 100;

  return (
    <div 
      className={"SectionWrapper"}
      style={{
        height: `${height}vh`,
      }}
    >
      <div className={"Section"}>
        <div 
          className={"Content"}
        >
          { children }
        </div>
      </div>
    </div>
  );
};

