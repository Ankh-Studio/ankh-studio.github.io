import { cn } from "@/lib/utils";

/* Stylized ANKH
 */
const ANKH = ({
  className,
}: { className?: string }) => {
  return (
    <div className={cn(
      "ANKH",
      className,
    )}>
      <span className="">MEET A</span>
      <span className="">NK</span>
      <span className="">H</span>
    </div>
  );
};

export default ANKH;
