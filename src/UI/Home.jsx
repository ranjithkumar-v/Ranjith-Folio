import About from "./About";
import Hero from "./Hero";
import Works from "./work-section/Works";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
export default function Home() {

  
  // useEffect(() => {
  //   // Scroll to home section when the page loads or refreshes
  //   window.location.hash = "#home";
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        window.scrollTo(0, 0); // Ensures the page starts at the top
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
