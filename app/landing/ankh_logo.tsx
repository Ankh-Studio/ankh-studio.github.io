import { GradientText } from "~/components/gradient_text";
import { cn } from "~/utils/cn";

const AnkhLogo = () => {
  return (
    <div className="AnkhStudio">
      <GradientText 
        className="Ankh font-bold mb-1"
        from_color="from-purple-900"
        via_color="via-blue-900"
        to_color="to-purple-900"
      >
        ANKH
      </GradientText>
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
