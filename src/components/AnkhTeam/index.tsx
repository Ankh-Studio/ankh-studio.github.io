import { ReactNode, useEffect, useState } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import ANKH from "../ANKH";
import { Info } from "@/lib/logger";
import { useBreakpointContext } from "@/hooks/useBreakpointContext";
import { FounderTablet } from "./FounderTablet";
import { FounderDesktop } from "./FounderDesktop";
import StarryBackground from "@/components/StarryBackground";
import { TeamMembers } from "@/components/AnkhTeam/data";

type CardProps = {
  className?: string;
  style?: MotionStyle | undefined;
  children: ReactNode;
};

const Card = ({
  className,
  style,
  children,
}: CardProps) => {
  return (
    <motion.div 
      className={cn(
        className,
        "Card"
      )}
      style={{...style}}
    >
      <div 
        className="CardBackground"
      >
        { children }
      </div>
    </motion.div>
  );
};

const AnkhTeam = () => {
  const {
    isMobile,
    isTablet,
    isDesktop,
    bpFilter,
  } = useBreakpointContext();

  const {
    scrollYProgress,
  } = useScroll();

  const [activeMember, setActiveMember] = useState<number|null>(null);

  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    [0, 1]
  )

  const y = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ['-100vh', '0vh']
  );

  const entranceBlur = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    ['blur(30px)', 'blur(0px)'],
  );

  useEffect(() => {
    Info(`isMobile: ${isMobile}`)
    Info(`isTablet: ${isTablet}`)
    Info(`isDesktop: ${isDesktop}`)
  }, [isMobile, isTablet, isDesktop]);

  return (
    <motion.section
      className="TeamPage"
      style={{
        filter: entranceBlur,
        opacity,
        y,
      }}
    >
      <StarryBackground />
      <Card className={cn(
        "TitleContainer"
      )}>
        <div className={cn(
          "Title text-Dark-Primary",
        )}>
          <ANKH className="TitleAlignment"/>
        </div>
      </Card>
      { bpFilter({
        desktop: (
          <Card className={"h-[30vw]"}>
            <div 
              className="TeamMemberDesktop"
            >
            { Object.entries(TeamMembers).map(([member, founder], index) => {
              return (
                <motion.div 
                  key={index}
                  className={cn(
                    activeMember === null
                      ? ""
                      : activeMember === index
                      ? "FounderExpand"
                      : "FounderClear"
                  )}
                >
                  <FounderDesktop 
                    index={index}
                    name={member}
                    founder={founder}
                    activeMember={activeMember}
                    setActiveMember={setActiveMember}
                  />
                </motion.div>
              );
            }) }
            </div>
          </Card>
        ),
        tablet: (
          <Card className={
            "m-2 p-4 h-full"
          }>
            <div className="TeamMemberTablet">
            { Object.entries(TeamMembers).map(([member, founder], index) => {
              return (
                <FounderTablet 
                  index={index}
                  member={member}
                  founder={founder}
                  activeMember={activeMember}
                  setActiveMember={setActiveMember}
                />
              );
            }) }
            </div>
          </Card>
        ),
        mobile: (
          <>
            TODO
          </>
        )
      })}
    </motion.section>
  );
};

export default AnkhTeam;
