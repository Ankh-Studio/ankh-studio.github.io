import type { ClassValue } from "clsx";
import { cn } from "./cn";
import { useWindowSize } from "~/hooks/windowSize";



/** DEBUG Component: 
 *  Displays the current TailwindCSS Breakpoint as defined in 
 *  `tailwind.config.css`
 **/
const Breakpoint = () => {
  const font: ClassValue = "text-purple-300/70 font-bold text-[clamp(1rem,2vw,1.75rem)]";
  const size = useWindowSize();

  const BP = ({
    title,
    point,
  }:{
    title: string,
    point: ClassValue,
  }) => {
    const t = title.length !== 0
      ? title.toUpperCase()
      : `? W( ${size.width} )`;

    return (
      <h1 className={cn(
        "hidden tracking-tight leading-0",
        point,
        font,
      )}>{ 
        t
      }{' '}<span className={cn(
        "text-xs translate-x-10"
      )}>{ size.width}px</span></h1>
    );
  };

  return (
    <div className={cn(
      "absolute top-13 right-13 md:left-13",
      "size-[clamp(4rem,5vw,6rem)]",
      "border border-white/30 rounded-xl",
      "bg-gradient-to-br from-gray-400/10 to-black/40",
      "backdrop-blur-lg border border-white/10",
      "text-center flex flex-col justify-center z-100"
    )}>
      <BP title="ms" point={"max-ms:block"}/>
      <BP title="mm" point={"mm:max-ml:block"}/>
      <BP title="ml" point={"ml:max-md:block"}/>
      <BP title="md" point={"md:max-lg:block"}/>
      <BP title="lg" point={"lg:max-xl:block"}/>
      <BP title="xl" point={"xl:max-2xl:block"}/>
      <BP title="2xl" point={"2xl:max-3xl:block"}/>
      <BP title="3xl" point={"3xl:max-4xl:block"}/>
      <BP title="4xl" point={"4xl:block"}/>
    </div>
  );
};

export default Breakpoint;
