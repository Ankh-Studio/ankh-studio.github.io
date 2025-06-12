import { motion, useScroll, useTransform } from "motion/react";

export const AnkhFounders = () => {
  const {
    scrollYProgress,
    scrollY,
  } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0.385, 0.494],
    [1, 1]
  );

  return (
    <section className={"Founders"}>
      <motion.div className={"Sticky"}
        style={{ opacity }}
      >
        <div className={"Founders_container"}>
        </div>
      </motion.div>
    </section>
  );
};
