import React from "react";
import styles from "./TimelineItem.module.css";
import positionIcon from "../../assets/Images/position-icon.svg";
import "intersection-observer";
import { useInView } from "react-intersection-observer";

export default function TimelineItem({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-60px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 relative duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <img
        src={positionIcon}
        width={24}
        height={24}
        alt="current"
        className="absolute -translate-x-[29px] sm:-translate-x-8 left-0"
      />

      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        <img
          src={companyImg}
          width={90}
          height={70}
          alt="company-image"
          className="col-span-1"
          style={{ borderRadius: "30%" }}
        />

        <div className={`${styles.timeline} col-span-4`}>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-[2rem] font-bold">{jobTitle}</h1>
            <p className="text-base sm:text-lg font-bold my-2 sm:my-3">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60 my-3">{duration}</p>

          {stuffIDid.map((stuff, index) => (
            <li
              // className="antialiased text-white/90 text-base md:text-lg my-6"
              className="text-lg sm:text-2xl md:text-[1.25rem] text-white/90 antialiased my-8"
              key={index}
            >
              {stuff}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
