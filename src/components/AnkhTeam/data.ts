
export const Settings = {
  ImgBorder       : 25.5,
  ImgSize         : 25,
  Duration        : 0.375,
  ImgFilterTablet : "sepia(0.75) brightness(0.2)",
  ImgFilterOn     : "sepia(0.75) brightness(0.1)",
  ImgFilterOff    : "sepia(0.55) brightness(1.0)",
};

export type Founder = {
  Img    : string;
  Color  : string;
  Header : string;
  Name   : string;
  Title  : string;
  Pillar : string;
  Desc   : string;
  Mantra : string;
};

export type TeamMemberMap = {
  [member: string]: Founder
};

export const TeamMembers: TeamMemberMap = {
  "Anubis": {
    Img    : "url(/images/anubis.png)",
    Color  : "Dark-AccentTwo",
    Header : "GUARDIAN OF THE STUDIO",
    Name   : "Brandon Coburn",
    Title  : "Studio Director & Cofounder",
    Pillar : "Under Brandon's leadership, we navigate the path between present and future, guarding our principles while shepherding innovation. As Anubis guides souls through transformation, we guide our projects through their lifecycle with wisdom and protection.",
    Desc   : "An Innovative Software Engineer with a passion for turning complex challenges into streamlined, next-generation solutions.",
    Mantra : "Through judgment comes clarity. Through guidance comes greatness."
  },
  "Khonsu": {
    Img    : "url(/images/khonsu.png)",
    Color  : "Dark-AccentThree",
    Header : "TIMEKEEPER OF INNOVATION",
    Name   : "Jonathan Reeves",
    Title  : "Cofounder",
    Pillar : "Jonathan drives our journey through the cycles of development, illuminating our path like the moon god guides travelers. His vision keeps us moving forward, marking time and progress in our technical evolution.",
    Desc   : "A Brilliant Software Engineer with hands-on experience delivering scalable, robust solutions across a variety of domains.",
    Mantra : "Through cycles comes mastery. Through light comes discovery.",
  },
  "Osiris": {
    Img    : "url(/images/osiris.png)",
    Color  : "Dark-AccentOne",
    Header : "ARCHITECT OF RESURRECTION",
    Name   : "Tyler Aldrich",
    Title  : "Cofounder",
    Pillar : "Tyler embodies the eternal renewal of our craft, ensuring our foundations remain strong while fostering growth. Like Osiris's domain of regeneration, we build upon stable ground while constantly renewing our capabilities.",
    Desc   : "A Passionate Software Engineer specializing in developing complex algorithms and efficient server solutions to enchance system performance and user experience.",
    Mantra : "Through death comes rebirth. Through structure comes freedom."
  },
};

