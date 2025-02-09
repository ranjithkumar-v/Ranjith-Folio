import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Title = ({ children }) => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);

  return (
    <motion.h1
      ref={titleRef}
      style={{ opacity }}
      className="uppercase text-4xl md:text-5xl xl:text-6xl font-bold"
    >
      {children}
    </motion.h1>
  );
};

export default Title;
