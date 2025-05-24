import React, { useEffect, useRef, useState } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "../Contexts/ViewContext";
import "../App.css";
import handWave from "../assets/Images/hand-wave-lightTone.png";
import profile from "../assets/Images/Ranjith.jpg";
export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const [rotateValue, setRotateValue] = useState(["0deg", "-10deg"]);

  const rotate = useTransform(scrollYProgress, [0, 1], rotateValue);

  // Adjust rotation based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        // Mobile screens (sm)
        setRotateValue(["0deg", "0deg"]);
      } else {
        setRotateValue(["0deg", "-10deg"]);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <img src={handWave} width="30" height="30" alt="hand-waving" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Ranjithkumar
          </span>
          <p> Frontend Developer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          Building Web Apps That Drive Growth
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="sm:block text-xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none mt-6"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1GTzAZ1hsSnA4NEuxftGtJiFcuf0-SF3b/view?usp=drive_link",
              "_blank"
            )
          }
        >
          Resume
        </motion.button>
      </div>
      <motion.div
        ref={imgRef}
        style={{ rotate }}
        className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
        initial={{ opacity: 0 }}
        animate={animateIn2}
        data-blobity-tooltip="Ranjith"
      >
        <img
          src={profile}
          alt="Ranjith's picture"
          className="w-full h-auto object-cover"
          style={{ borderRadius: "10%" }}
        />
      </motion.div>
    </div>
  );
}
