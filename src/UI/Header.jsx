import { useState } from "react";
import { useView } from "../Contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/Images/logo1.png";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
          <img
            src={logo}
            width="36"
            height="36"
            alt="logo"
            className="select-none"
          />
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex sm:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
            <a
              href="#home"
              className={`${sectionInView == "home" && "text-white"} `}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${sectionInView == "about" && "text-white"} `}
            >
              About
            </a>
            <a
              href="#work"
              className={`${sectionInView == "work" && "text-white"} `}
            >
              Work
            </a>
            <a
              href="#contact"
              className={`${sectionInView == "contact" && "text-white"} `}
            >
              Contact
            </a>
          </ul>
          <div className="gap-5 text-xl hidden sm:flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ranjithkumar-v-/"
            >
              <Icon icon="hugeicons:linkedin-01" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ranjithkumar-v"
            >
              <Icon icon="hugeicons:github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ranjith__v"
            >
              <Icon icon="akar-icons:x-fill" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ranjith_v_/"
            >
              <Icon icon="akar-icons:instagram" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
}
