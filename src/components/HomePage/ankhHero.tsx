import { lexand } from "@/fonts";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";


export const AnkhHero = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { scrollYProgress, scrollY } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.163],
    [1, 0]
  );

  return (
    <motion.div ref={ref} className="Hero" style={{ 
      y: scrollY,
    }}>
      <motion.div className={"Hero_container window-grid"}
        style={{ 
          opacity,
          display: inView ? 'grid' : 'none',
        }}
      >
        <div className="Hero_center page-margin content-grid">
          <h1 className="Hero_body">ANKH STUDIO</h1>
        </div>
      </motion.div>
    </motion.div>
  );
  //return (
  //  <motion.section ref={ref}
  //    className={"Hero"}
  //    style={{ 
  //      y,
  //    }}
  //  >
  //    <motion.div 
  //      className={"Sticky Hero_container window-grid"}
  //      style={{
  //        opacity,
  //        display: inView ? 'grid' : 'none',
  //      }}
  //    >
  //      <div className={
  //        "Hero_center page-margin content-grid"
  //      }>
  //        <div className={"Hero_left"}>
  //        </div>
  //        <div className={"Hero_body"}>
  //        </div>
  //        <div className={"Hero_right"}>
  //        </div>
  //      </div>
  //    </motion.div>
  //  </motion.section>
  //);
};
