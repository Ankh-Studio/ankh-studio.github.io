import React, { act, useEffect, useRef, useState } from "react";
import StarryBackground from "../StarryBackground";
import { Founder, TeamMembers } from "@/components/AnkhTeam/data";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/hooks/useThemeContext";

const FounderComponent = ({
  index,
  image,
  name,
  founderSelected,
  onMouseDown,
}:{
  index   : number;
  image   : string;
  name    : string;
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

  const founderState = (ifSelected: string, ifHovered: string): string => {
    if( isSelected ) return `${ifSelected} ${ifHovered}`;
    if( hover ) return ifHovered;
    return "";
  };

  if( fullName === null) return;
  return (
    <div 
      className={"Founder_image"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={onMouseDown}
    >
      <div className={cn(
        "Founder_image_src",
        founderState("", "Darken")
      )}
        style={{ backgroundImage: image }}
      />
      <div className={cn(
        "Founder_image_overlay",
        hover && "ShowingOverlay"
      )}
        style={{ backgroundImage: image }}
      >
        <h1>{ fullName.First }</h1>
        <h1>{ fullName.Last }</h1>
      </div>
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
    <div 
      className={cn(
        "SelectedFounder",
        isSelected && "ShowingFounder",
      )}
    >
      <div className={cn(
        "Image",
        hover && "Hover"
      )}>
        <div className={"Image_src"}
          style={{
            backgroundImage: founder.Img,
          }}
        />
        <div className={cn(
          "Image_overlay",
          hover && "Hover"
        )}
          style={{
            backgroundImage: founder.Img,
          }}
          onMouseDown={onMouseDown}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h1>{ fullName.First }</h1>
          <h1>{ fullName.Last }</h1>
        </div>
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
  );
};

export const TestTeam = () => {
  const [ active, setActive ] = useState<number|null>(null);

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

            <div className={cn(
              "TeamAnkh_founders",
              active !== null
                ? "Selected"
                : ""
            )}>
              {Object.entries(TeamMembers).map((([member,founder],index) => {
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
