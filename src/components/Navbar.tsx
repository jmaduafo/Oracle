"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/mulaLogo.png";
import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredText, setHoveredText] = useState("");

  const pathname = usePathname();

  function handleMenu() {
    setIsMenuClicked((prev) => !prev);
  }

  const navMenu = [
    {
      href: "/#about",
      title: "about",
    },
    {
      href: "/artists",
      title: "artists",
    },
    {
      href: "/gallery",
      title: "gallery",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  return (
    <div className="relative z-[90]">
      <Menu isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
      <header>
        <nav
          className={`sm:px-[6rem] flex ${
            isMenuClicked ? "justify-end py-[50px]" : "justify-between py-5"
          } items-center px-[30px] py-5`}
        >
          <div
            className={`${isMenuClicked ? "hidden" : "block"} duration-[.4s]`}
          >
            <Link href={"/"}>
              <Image
                src={logo}
                alt="white oracle music of t.h.u.g.s. music logo"
                width={60}
              />
            </Link>
          </div>
          <div>
            <ul
              // ASSIGNS TRUE OR FALSE IF THE DIV IS HOVERED OVER
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="sm:flex items-center gap-6 hidden"
            >
              {navMenu.map((nav) => {
                return (
                  // ADDS BLUR EFFECT IF LIST ELEMENTS ARE NOT HOVERED OVER
                  // ONLY IF MOUSE IS WITHIN RANGE OF THE UNORDERED LIST DIV
                  <li
                    key={nav.title}
                    onMouseEnter={() => setHoveredText(nav.title)}
                    onMouseLeave={() => setHoveredText("")}
                    className={`text-[14px]
                    ${
                      pathname === nav.href && !isHovered
                    ? "text-white" : "text-text"}

                    ${ hoveredText === nav.title && isHovered ? 
                      "text-white" 
                      : 
                      (isHovered ? "blur-[1.5px] text-text" : 'text-text')
                    }
                    duration-[.3s]`}
                  >
                    <Link href={nav.href}>{nav.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            onClick={handleMenu}
            className="sm:hidden flex flex-col gap-[5px] cursor-pointer z-[90]"
          >
            <MenuBars isMenuClicked={isMenuClicked} />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

function MenuBars({ isMenuClicked }: { readonly isMenuClicked: boolean }) {
  return (
    <>
      <div
        className={`${
          isMenuClicked ? "rotate-[35deg] translate-y-[7px]" : "rotate-0"
        } duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}
      ></div>
      <div
        className={`${
          isMenuClicked ? "opacity-0" : "opacity-1"
        } duration-[.4s] h-[2px] w-[4.5rem] bg-text`}
      ></div>
      <div
        className={`${
          isMenuClicked ? "rotate-[-35deg] translate-y-[-7px]" : "rotate-0"
        } duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}
      ></div>
    </>
  );
}
