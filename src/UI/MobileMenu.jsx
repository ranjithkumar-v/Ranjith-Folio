import { useView } from "../Contexts/ViewContext";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({ onMenuOpen }) {
    const { sectionInView } = useView();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid z-10 items-center grid-cols-2 sm:hidden px-6 py-5 fixed top-12 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] max-w-[90%] w-full to-[#7373731f] mt-12 sm:mt-16 std-backdrop-blur"
        >
            <ul
                className="flex flex-col gap-4 lg:gap-12 text-white/25"
                onClick={() => onMenuOpen(false)}
            >
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

            <div className="flex flex-col gap-3 z-20 items-center justify-center">
                <div className="flex gap-3 w-full">
                    <a
                        className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
                        target="_blank"
                        href="https://www.linkedin.com/in/ranjithkumar-v-/" data-blobity-radius="10"
                    >
                        <Icon icon="hugeicons:linkedin-01" />
                    </a>
                    <a
                        className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
                        target="_blank"
                        href="https://github.com/ranjithkumar-v"
                        data-blobity-radius="10"
                    >
                        <Icon icon="akar-icons:github" />
                    </a>

                </div>

                <div className="flex gap-3 w-full">
                    <a
                        className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
                        target="_blank"
                        href="https://x.com/ranjith__v" data-blobity-radius="10"
                    >
                        <Icon icon="akar-icons:x-fill" />
                    </a>
                    <a
                        className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] std-backdrop-blur"
                        target="_blank"
                        href="https://www.instagram.com/ranjith_v_/" data-blobity-radius="10"
                    >
                        <Icon icon="akar-icons:instagram" />
                    </a>

                </div>
            </div>
        </motion.div>
    );
}
