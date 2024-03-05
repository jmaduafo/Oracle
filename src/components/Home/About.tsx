import React from "react";
import Image from "next/image";
import { reverie, satoshiMedium } from "@/styles/fonts";
import SpinningStar from "../SpinningStar";
import { AboutImagesProps } from "@/type/types";
import Picture1 from "../../../public/images/aboutMula1.jpg";
import Picture2 from "../../../public/images/aboutMula2.jpg";
import Picture3 from "../../../public/images/aboutMula3.jpg";
import Picture4 from "../../../public/images/aboutMula4.png";

function About() {
  const images: AboutImagesProps[] = [
    {
      image: Picture1,
      alt: "scenic background with man on platform",
      width: "md:w-[24vw] w-[45vw]",
      position: "md:top-[-5%] md:right-[10%]",
      zIndex: "z-[-1]",
    },
    {
      image: Picture2,
      alt: "j mula standing under shade at beach",
      width: "md:w-[20vw] w-[26vw]",
      position: "md:top-[50%] md:right-[6%]",
      zIndex: "z-[-1]",
    },
    {
      image: Picture3,
      alt: "j mula in a max opening a red ring box",
      width: "md:w-[18vw] w-[35vw]",
      position: "md:bottom-[30%] md:left-[25%]",
      zIndex: "z-[-1]",
    },
    {
      image: Picture4,
      alt: "man in a pink shirt turned away from camera",
      width: "md:w-[16vw] w-[35vw]",
      position: "md:bottom-[5%]",
      zIndex: "z-[-1]",
    },
  ];

  return (
    <>
      <section className="">
        <div className="relative md:w-[70%] h-[120vh] mb-[5rem] mx-auto my-0">
          {/* SCROLLING ANIMATION FOR IMAGES */}
          <div className="">
            {images.map((img) => {
              return (
                <div
                  key={img.alt}
                  className={`absolute ${img.width} ${img.position} ${img.zIndex}`}
                >
                  <Image src={img.image} alt={img.alt} placeholder="blur" />
                </div>
              );
            })}
          </div>
          {/* ABOUT INTRO TEXT WITH SHORT DESCRIPTION */}
          <div className="">
            <div className="flex items-center gap-6">
              <h5
                className={`${satoshiMedium.className} tracking-tighter text-[6vw]`}
              >
                Lorem {" "}
                <span className={`${reverie.className} text-[6vw]`}>
                  ipsum
                </span>
              </h5>
              <SpinningStar size="5vw" />
            </div>
            <div className="mt-[-3em]">
              <h5
                className={`${satoshiMedium.className} indent-[10%] tracking-tighter text-[6vw]`}
              >
                dolor sit amet.
              </h5>
            </div>
            <div className="w-[60%] mx-auto leading-tight">
              <p className={`pl-[6em] mix-blend-difference`}>
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO ABOUT SECTION WITH COLOR DODGE BACKGROUND*/}
      <section>
        <div className="relative mb-[8rem] sm:h-[40vh] md:h-[65vh] xl:[80vh] h-[30vh] overflow-hidden flex items-end">
          <video
            className="absolute w-full mix-blend-color"
            autoPlay
            loop
            muted
            preload="none"
          >
            <source
              src="https://res.cloudinary.com/dyxxn831a/video/upload/v1709491474/oracle%20music/mula_vid_mp4_gl6cba.mp4"
              type="video/mp4"
            />
          </video>
          {/* MORE DETAILED PARAGRAPH */}
          <div className="px-10 pb-4">
            <SpinningStar size="40px" />
            <h4
              className={`${satoshiMedium.className} mt-6 text-[3.5vw] tracking-tight leading-tight uppercase`}
            >
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
