import React from "react";
import { reverie } from "@/styles/fonts";
import { motion, easeIn } from "framer-motion";
import Link from "next/link";

type Props = {
  readonly isMenuClicked: boolean;
  readonly setIsMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isMenuClicked, setIsMenuClicked }: Props) {
  return (
    <motion.div
      initial={{ opacity: isMenuClicked ? 0 : 1 }}
      animate={{ opacity: isMenuClicked ? 1 : 0, transition: { duration: 0.4, ease: easeIn } }}
      className={`${
        isMenuClicked ? "visible" : "invisible"
      } duration-[.4s] sm:hidden w-screen h-screen fixed top-0 left-0 z-[50] flex justify-center items-center bg-background`}
    >
      <ul className="flex flex-col items-center xs:gap-0 gap-[.1rem]">
        <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
          <Link onClick={() => setIsMenuClicked(false)} href='/'>Home</Link>
        </li>
        <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
          <Link onClick={() => setIsMenuClicked(false)} href='/#about'>About</Link>
        </li>
        <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
          <Link onClick={() => setIsMenuClicked(false)} href='/artists'>Artists</Link>
        </li>
        <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
          <Link onClick={() => setIsMenuClicked(false)} href='/gallery'>Gallery</Link>
        </li>
        <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
          <Link onClick={() => setIsMenuClicked(false)} href='/contact'>Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default Menu;
