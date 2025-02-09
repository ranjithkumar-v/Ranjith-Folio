import React, { useEffect } from "react";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";
import { useView } from "../../Contexts/ViewContext";
import FolioCard from "./FolioCard";
import Title from "../../Animate/Title";
import keeperapp from "../../assets/Images/keeperApp.png";
import simonGame from "../../assets/Images/simonGame.png";
export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Keeper App",
      liveLink: "https://reactjs-keeper-app.netlify.app/",
      about:
        "Keeper App is a productivity web app designed to help users effectively organize their thoughts and ideas. It provides a seamless experience for managing notes, with an intuitive interface optimized for enhanced efficiency.",
      stack: ["React", "Javascript", "SCSS", "Material UI"],
      img: keeperapp,
      gitLink: "https://github.com/ranjithkumar-v/KeeperApp",
    },
    {
      title: "Simon Game",
      gitLink: "https://github.com/ranjithkumar-v/Memory-Game",
      liveLink: "https://ranjithkumar-v.github.io/Memory-Game/",
      about:
        "Developed an interactive web-based memory game inspired by the classic Simon game. The game tests and improves user's memory skills by presenting a sequence of lights and sounds that User must replicate. The game progressively increases in difficulty as the sequence lengthens.",
      stack: ["HTML", "CSS", "Javascript"],
      img: simonGame,
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Timeline />
      <Title>Personal Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
    </section>
  );
}
