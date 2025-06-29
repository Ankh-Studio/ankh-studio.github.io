import { cn } from "~/utils/cn"
import anubis from "/images/anubis.png"
import khonsu from "/images/khonsu.png"
import osiris from "/images/osiris.png"

interface AnkhFounder {
  name         : string;
  deity        : string;
  role         : string;
  expertise    : string;
  image        : string;
  color        : string;
  gradient     : string;
  description  : string;  
}

const AnkhFoudners: AnkhFounder[] = [
  { 
    name: "Brandon Coburn", 
    deity: "Anubis",
    role: "Chief Technology Officer", 
    expertise: "AI Architecture & Systems Design",
    image : anubis,
    color: "emerald-500",
    gradient: "from-emerald-500 to-teal-600",
    description: "Guardian of digital transformation and keeper of technological wisdom"
  },
  { 
    name: "Johnathan Reeves", 
    deity: "Khonsu",
    role: "Chief Executive Officer", 
    expertise: "Business Strategy & Innovation",
    image: khonsu,
    color: "blue-500",
    gradient: "from-blue-500 to-indigo-600",
    description: "Navigator of time and architect of strategic futures"
  },
  { 
    name: "Tyler Aldrich", 
    deity: "Osiris",
    role: "Chief Product Officer", 
    expertise: "Product Development & UX",
    image: osiris,
    color: "green-600",
    gradient: "from-emerald-400 to-green-600",
    description: "Creator of digital life and master of user experiences"
  }
]

const FounderCard = ({
  founder,
}:{
  founder: AnkhFounder,
}) => {
  return (
    <div className={cn(
      "text-center group relative z-10"
    )}>
      <div className={cn(
        "absolute inset-0 mx-auto",
        `bg-gradient-to-br ${founder.gradient} rounded-full opacity-0`,
        "group-hover:opacity-100 transition-opacity duration-500 blur-sm",
        "w-48 h-48 lg:w-64 lg:h-64  2xl:w-128 2xl:h-128"
      )}/>
      <div className={cn(
        "relative rounded-full mx-auto overflow-hidden border-4 border-transparent",
        `${founder.color} transition-all duration-500`,
        "w-48 h-48 lg:w-64 lg:h-64  2xl:w-128 2xl:h-128"
      )}>
        <div className={cn(
          "absolute inset-0",
          `bg-gradient-to-br ${founder.gradient} opacity-0`,
          "group-hover:opacity-30 transition-opacity duration-500"
        )}/>
        <div className={cn(
          "relative w-full h-full bg-gray-800 flex items-center justify-center"
        )}>
          <img 
            className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-500 sepia-50 group-hover:sepia-20"
            src={founder.image}
            alt={founder.deity}
          />
        </div>
      </div>
      <h3 className={cn(
        "font-semibold  mt-4",
        "text-2xl 2xl:text-4xl",
      )}>
        {founder.name}
      </h3>
      <p className={cn(
        `bg-gradient-to-r ${founder.color} bg-clip-text text-transparent font-semibold mb-2`,
        "text-l text-gray-400"
      )}>
        {founder.role}
      </p>
      <p className={cn(
        "text-gray-500 mb-3",
        "text-xl"
      )}>
        {founder.expertise}
      </p>
      <p className={cn(
        "text-gray-600 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        " text-ms "
      )}>
        {founder.description}
      </p>
    </div>
  );
};

const Founders = () => {

  return (
    <section id="founders">
      <div className="w-[100vw] h-[100vh] bg-black flex flex-col justify-center pb-96">
        <div className={cn(
          "border",
          "relative w-3/4 h-full mx-auto",
          "flex flex-col justify-start mt-36 pt-18 2xl:mt-48 2xl:pt-24"
        )}>
          <h2 className={cn(
            "text-center mb-12 2xl:mb-48",
            "text-5xl 2xl:text-8xl",
          )}>Meet our Founders</h2>
          <div className={cn(
            "flex justify-around"
          )}>
            {AnkhFoudners.map((founder, index) => (
              <div key={index}>
                <FounderCard founder={founder} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}


export default Founders;
