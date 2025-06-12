import { Info } from "@/lib/logger";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export const AnkhServices = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0.039, 0.16,  0.24, 0.4],
    ['120vh', '2vh', '2vh', '-100vh']
  );

  useEffect(() => {
    Info({
      timestamp: true,
      msg: `Services in View: ${inView}`,
    })
  }, [inView]);

  return (
    <section className={"Services"}>
      <motion.div 
        ref={ref}
        className={"Sticky"}
      >
        <motion.div style={{y}} className={"Services_window window-grid"}>
          <div 
            className={cn(
              "page-margin Services_container",
              inView && "animate",
            )
            }
          >
            <div className={"Services_title "}>
              <h1>ANKH SERVICES</h1>
            </div>
            <div className={"Services_group"}>
          
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
