import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import React from "react";

const AnimatedTitle = ({ children, className, wordSpace, charSpace }) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2 role="heading" className={className}>
      {children.split(" ").map((word, index) => (
        <motion.span
          ref={ref}
          aria-hidden="true"
          key={index}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
          className={`inline-block whitespace-nowrap select-none ${wordSpace}`}
        >
          {word.split("").map((character, idx) => (
            <motion.span
              aria-hidden="true"
              key={idx}
              variants={characterAnimation}
              className={`inline-block ${charSpace}`}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
