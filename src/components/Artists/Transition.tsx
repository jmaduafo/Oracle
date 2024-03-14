"use client";
import React, { useState, useEffect } from "react";
import { satoshiMedium, satoshiBold } from "@/styles/fonts";
import Image from "next/image";
import Picture from "../../../public/images/misc2.jpg";
import Picture2 from "../../../public/images/test1.jpg";
import CustomCursor from "../CustomCursor";
import Link from "next/link";

function Transition() {
  const firstPart = "Taking it one";
  const secondPart = "step further";

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  return (
    <section className="px-5">
      <div className="flex items-center flex-wrap gap-[3vw]">
        {firstPart.split(" ").map((part, index) => {
          return (
            <div key={`part_${index + 1}`}>
              <h2
                className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}
              >
                {part}
              </h2>
            </div>
          );
        })}
        <div className="w-[35vw] md:h-[150px] h-[80px] rounded-xl object-cover object-top">
          <Image
            src={Picture}
            alt="sky during sunset"
            placeholder="blur"
            className="w-full h-full rounded-full"
          />
        </div>
        {secondPart.split(" ").map((part, index) => {
          return (
            <div key={`part_${index + 1}`}>
              <h2
                className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}
              >
                {part}
              </h2>
            </div>
          );
        })}
        <Link href='/contact'>
            <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={windowMouse}
            className="w-[35vw] relative md:h-[150px] h-[80px] rounded-xl object-cover object-top duration-[.3s] hover:cursor-none group"
            >
                <Image
                    src={Picture}
                    alt="sky during sunset"
                    placeholder="blur"
                    className="w-full h-full rounded-full group-hover:mix-blend-color-dodge"
                />
                <CustomCursor
                    x={x}
                    y={y}
                    isHovered={isHovered}
                    className="p-3 md:w-[120px] md:h-[120px] w-[90px] h-[90px] border-[4px] border-accent bg-white"
                    >
                    <p className={`${satoshiMedium.className} text-accent sm:text-[22px] text-[18px] text-center leading-[1] tracking-tighter`}>HOLLA AT US</p>
                </CustomCursor>
            </div>
        </Link>
      </div>
      <div className="flex items-end gap-8 my-[4rem] sm:w-[80%] md:w-[75%] lg:w-[65%] w-[85%] mx-auto sm:flex-row flex-col-reverse">
        <div className="flex-1 sm:pl-0 pl-[4rem]">
          <p className="">
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
            libero, sit amet adipiscing sem neque sed ipsum.
          </p>
        </div>
        <div className="flex-[2] object-cover object-bottom sm:pr-0 pr-[4rem]">
          <Image src={Picture2} alt="" className="w-full h-full rounded-xl" />
        </div>
      </div>
    </section>
  );
}

export default Transition;
