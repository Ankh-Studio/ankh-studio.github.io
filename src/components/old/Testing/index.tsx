import React, { useEffect, useState } from "react";
import StarryBackground from "../StarryBackground";
import { Founder, TeamMembers } from "@/components/AnkhTeam/data";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/hooks/useThemeContext";
import { useBreakpointContext } from "@/hooks/useBreakpointContext";

const FounderOverlay = ({
  member,
  name,
  image,
  hover,
  selected,
}:{
  member : string; 
  name   : string;
  image  : string;
  hover  : boolean;
  selected : boolean;
}) => {
  const [fullName, setFullName] = useState<{
    First: string;
    Last: string;
  }|null>(null);

  useEffect(() => {
    const parts = name.split(" ");
    setFullName({
      First : parts[0],
      Last  : parts[1],
    });
  }, []);

  const founderState = (ifSelected: string, ifHovered: string): string => {
    if( selected ) return `${ifSelected} ${ifHovered}`;
    if( hover ) return ifHovered;
    return "";
  };

  if( fullName === null ) return;
  return (
    <>
    <div className={cn(
      "Founder_image_src",
      member,
      founderState("", "Darken")
    )}
      style={{ backgroundImage: image }}
    />
    <div className={cn(
      "Founder_image_overlay",
      member,
      hover && "ShowingOverlay"
    )}
      style={{ backgroundImage: image }}
    >
      <div className={"FullName"}>
        <div className={"First"}>
          <h1>{ fullName.First }</h1>
        </div>
        <div className={"Last"}>
          <h1>{ fullName.Last }</h1>
        </div>
      </div>
    </div>
    </>
  );
};

const FounderComponent = ({
  index,
  image,
  name,
  member,
  founderSelected,
  onMouseDown,
}:{
  index   : number;
  image   : string;
  name    : string;
  member  : string;
  founderSelected  : number|null;
  onMouseDown : React.MouseEventHandler<HTMLDivElement> | undefined,
}) => {
  const isSelected = founderSelected === index;
  const [hover, setHover] = useState(false);
  const [fullName, setFullName] = useState<{First: string, Last: string}|null>(null);

  useEffect(() => {
    const parts = name.split(" ");
    setFullName({
      First: parts[0],
      Last: parts[1],
    });
  }, []);

  if( fullName === null) return;
  return (
    <div 
      className={"Founder_component"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={onMouseDown}
    >
      <FounderOverlay 
        member={member}
        name={name}
        image={image}
        hover={hover}
        selected={isSelected}
      />
    </div>
  );
};

export const SelectedFounder = ({
  index,
  member,
  founder,
  founderSelected,
  onMouseDown,
}: {
  index       : number;
  member      : string;
  founder     : Founder;
  founderSelected  : number|null;
  onMouseDown : React.MouseEventHandler<HTMLDivElement> | undefined,
}) => {
  const { themeColors } = useThemeContext();
  const isSelected = index === founderSelected;
  const [fullName, setFullName] = useState<{First: string, Last: string}|null>(null);
  const [hover, setHover] = useState(false);

  const color = (() => {
    switch( member ){
      case "Anubis":
        return themeColors.AccentTwo
      case "Khonsu":
        return themeColors.AccentThree
      case "Osiris":
        return themeColors.AccentOne
    }
  })();

  useEffect(() => {
    const parts = founder.Name.split(" ");
    setFullName({
      First: parts[0],
      Last: parts[1],
    });
  }, []);

  if( fullName === null ) return;
  return (
    <div className={cn(
      "SelectedPosition",
        isSelected && "ShowingFounder",
    )}>
      <div 
        className={cn(
          "SelectedFounder"
        )}
      >
        <div 
          className={cn(
            "SelectedFounder_component",
            hover && "Hover"
          )}
          onMouseDown={onMouseDown}
        >
          <FounderOverlay 
            member={member}
            name={founder.Name}
            image={founder.Img}
            hover={hover}
            selected={isSelected}
          />
        </div>
        <div className={cn(
          "FounderContainer",
            isSelected && "ExpandContainer",
        )}>
          <div className={cn(
            "FounderContainer_flex",
            isSelected && "ExpandContainer",
          )}>
            <div className={"FounderContainer_title"}>
              <h1 style={{
                color
              }}>{ member }</h1>
            </div>
            <div className={"FounderContainer_body"}>
              <div className={"FounderContainer_info"}
                style={{
                  borderRight: `2px solid ${color}15`,
                }}
              >
                <h2 style={{ 
                    color: themeColors.TextSecondary,
                  }}
                >{ founder.Pillar }</h2>
                <br/>
                <h2 style={{ 
                    color: themeColors.TextSecondary,
                    borderLeft: `1px solid ${color}`,
                }}>
                  {founder.Desc}
                </h2>
              </div>
              <div className={"FounderContainer_tech"}>

              </div>
            </div>
            <div className={"FounderContainer_footer"}>
              <h3 style={{ color }}>{ founder.Mantra}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestTeam = () => {
  const [ active, setActive ] = useState<number|null>(null);
  const { } = useBreakpointContext();

  return (
    <Wrapper depth={3}>
      <div className={"absolute top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)]"}/>
      <StarryBackground />
      <div className={"Blurred"}/>
      <div className={"TeamWindow"}>
        <div className={"TeamAnkh"}>
          <div className="TeamAnkh_body">

            <div className={"TeamAnkh_title"}>
              <h1 className={"TeamAnkh_meet"}>MEET THE TEAM</h1>
            </div>

              { Object.entries(TeamMembers).map((([member, founder],index) => (
                <SelectedFounder 
                  index={index}
                  member={member}
                  founder={founder}
                  founderSelected={active}
                  onMouseDown={() => {
                    setActive(null);
                  }}
                />
              ))) }
            <div className={cn(
              "TeamAnkh_founders",
              active !== null
                ? "Selected"
                : ""
            )}>
              {Object.entries(TeamMembers).map((([member, founder],index) => {
                return (
                  <>
                  <div key={index} 
                    className={cn(
                      "Founder",
                    )}>
                    <FounderComponent
                      index={index}
                      image={founder.Img}
                      name={founder.Name}
                      member={member}
                      founderSelected={active}
                      onMouseDown={() => {
                        setActive((prev) => prev === index ? null : index);
                      }}
                    >
                    </FounderComponent>
                  </div>
                  </>
                );
              }))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = ({ 
  depth,
  children,
}:{ 
  depth: number;
  children?: React.ReactNode;
}) => {
  const height = Math.max(depth, 1) * 100;

  return (
    <div className={"SectionWrapper"}
      style={{
        height: `${height}vh`,
      }}
    >
      <div className={"Section"}>
        <div className={"Content"}>
          { children }
        </div>
      </div>
    </div>
  );
};
