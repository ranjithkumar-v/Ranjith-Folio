import React, { useEffect } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Tag from "./Tag";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useView } from "../../Contexts/ViewContext";

export default function FolioCard(props) {
  const { setSectionInView } = useView();
  const { title, img, gitLink, liveLink, about, stack } = props;

  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);
  return (
    <div
      ref={ref}
      className={`w-full rounded-[20px] std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <img
        src={img}
        width="50%"
        height="50%"
        alt="work"
        className="rounded-[10px]  lg:col-span-5"
      />
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
            {title}
          </h2>
          <div className="flex gap-3 md:gap-4 text-2xl sm:text-3xl xl:text-4xl">
            <a
              href={liveLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red"
              target="_blank"
              aria-label="View Live Demo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
            >
              <Icon icon="line-md:external-link-rounded" />
            </a>
            
            <a
              href={gitLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red"
              target="_blank"
              aria-label="View Github Repo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"  
            >
              <Icon
                icon="mingcute:github-line"
                className={`"opacity-30"}`}
              />            
              
              </a> 
          </div>
        </div>
        {/* <p className="text-base text-white/70">{about}</p> */}
        <p className="text-md sm:text-lg text-white/80  antialiased">{about}</p>
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {stack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
