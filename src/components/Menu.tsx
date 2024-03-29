import React from "react";
import { reverie } from "@/styles/fonts";
import { motion, easeIn } from "framer-motion";
import Link from "next/link";

type MenuProps = {
  readonly isMenuClicked: boolean;
  readonly setIsMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

type NavProps = {
  setIsMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
  href: string;
  title: string
}

function Menu({ isMenuClicked, setIsMenuClicked }: MenuProps) {
  const navMenu = [
    {
      href: '/',
      title: 'home'
    },
    {
      href: '/#about',
      title: 'about'
    },
    {
      href: '/artists',
      title: 'artists'
    },
    {
      href: '/gallery',
      title: 'gallery'
    },
    {
      href: '/contact',
      title: 'contact'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: isMenuClicked ? 0 : 1 }}
      animate={{ opacity: isMenuClicked ? 1 : 0, transition: { duration: 0.4, ease: easeIn } }}
      className={`${
        isMenuClicked ? "visible" : "invisible"
      } duration-[.4s] sm:hidden w-screen h-screen fixed top-0 left-0 z-[50] flex justify-center items-center bg-background`}
    >
      <ul className="flex flex-col items-center xs:gap-0 gap-[.1rem]">
        {navMenu.map(nav => {
          return (
            <div key={nav.title}>
              <NavLink 
                setIsMenuClicked={setIsMenuClicked}
                href={nav.href}
                title={nav.title}
              />
            </div>
          )
        })}
      </ul>
    </motion.div>
  );
}

export default Menu;


function NavLink({setIsMenuClicked, href, title} : NavProps) {
  return (
    <li className={`${reverie.className} text-text xs:text-[5rem] text-[4rem] uppercase`}>
      <Link onClick={() => setIsMenuClicked(false)} href={href}>{title}</Link>
    </li>
  )
}