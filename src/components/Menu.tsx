import React from "react";
import { reverie } from "@/styles/fonts";
import { motion, easeIn } from "framer-motion";

function Menu({ isMenuClicked }: { readonly isMenuClicked: boolean }) {
  return (
    <motion.div
      initial={{ opacity: isMenuClicked ? 0 : 1 }}
      animate={{ opacity: isMenuClicked ? 1 : 0, transition: { duration: 0.4, ease: easeIn } }}
      className={`${
        isMenuClicked ? "visible" : "invisible"
      } duration-[.4s] sm:hidden w-screen h-screen fixed top-0 left-0 z-[50] flex justify-center items-center bg-background`}
    >
      <ul className="flex flex-col items-center gap-[.6rem]">
        <li className={`${reverie.className} text-text text-[4rem] uppercase`}>
          Home
        </li>
        <li className={`${reverie.className} text-text text-[4rem] uppercase`}>
          About
        </li>
        <li className={`${reverie.className} text-text text-[4rem] uppercase`}>
          Artists
        </li>
        <li className={`${reverie.className} text-text text-[4rem] uppercase`}>
          Gallery
        </li>
        <li className={`${reverie.className} text-text text-[4rem] uppercase`}>
          Contact
        </li>
      </ul>
    </motion.div>
  );
}

export default Menu;
