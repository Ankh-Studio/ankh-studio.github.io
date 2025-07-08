import { useMemo } from "react";
import { GradientText } from "~/components/gradient_text";
import { cn } from "~/utils/cn";

const AnkhLogo = () => {

  //const ANKH = useMemo(() => (
    //<GradientText 
    //  className="Ankh font-bold mb-1"
    //  from_color="from-purple-900"
    //  via_color="via-blue-900"
    //  to_color="to-purple-900"
    //>
    //  ANKH
    //</GradientText>
  //), []);

  return (
    <div className="AnkhStudio">
      <h1 className={cn(
        "Ankh font-bold mb-1",
        "bg-clip-text text-transparent bg-gradient-to-r",
        "from-purple-500 from-0% via-blue-900 via-40% to-purple-900 to-100%"
      )}>
        ANKH
      </h1>
      <h4 className="Studio text-[#d9b3ff]">
        STUDIO
      </h4>

      <div className={"StudioBorder"}
        style={{
          backgroundImage: `linear-gradient(to right, #d9b3ff, #ff00ff 60%)`
        }}
      />
    </div>
  )
}

export default AnkhLogo;
