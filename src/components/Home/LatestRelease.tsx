import React from "react";
import ArtistPic from "../../../public/images/mula1.jpg";
import Image from "next/image";
import { latestRelease } from "@/utils/latestRelease";
import { satoshiMedium } from "@/styles/fonts";
import { PlayIcon } from "@heroicons/react/24/solid";
import CloudImage from "../CloudImage";

function LatestRelease() {
  const videoDetails = [
    {
      title: "Video Director",
      name: latestRelease.videoDirector,
    },
    {
      title: "Manager",
      name: latestRelease.manager,
    },
    {
      title: "Producer",
      name: latestRelease.producer,
    },
  ];

  return (
    <section>
      <div className="px-6 mb-8">
        {/* LATEST RELEASE HEADER */}
        <div className="flex items-center gap-5">
          <div className="h-[1px] w-[30px] bg-text opacity-50"></div>
          <div className="uppercase">Latest Release</div>
        </div>
        {/* MAIN SECTION */}
        <div className="flex md:flex-row flex-col gap-4 mt-6 ">
          {/* VIDEO WITH VIDEO DETAILS   */}
          <div className="flex-[2]">
            <div
              className="cursor-pointer w-full h-[70vh] bg-no-repeat bg-center bg-cover rounded-[20px]"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dyxxn831a/image/upload/v1709562672/oracle%20music/mula8_wifqat.jpg)`,
              }}
            >
              <div className="flex justify-center items-center h-full">
                <PlayIcon color="#DEFDA5" className="h-14 w-14" />
              </div>
            </div>
            <div className="flex justify-between items-start mt-3">
              {videoDetails.map((det) => {
                return (
                  <div key={det.title} className="">
                    <p className="uppercase opacity-50 tracking-tight text-center">
                      {det.title}
                    </p>
                    <p className="tracking-tight text-center">{det.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* VIDEO TITLE WITH ARTIST NAME AND ARTIST IMAGE */}
          <div className="flex-[1]">
            <div className="bg-[#DEFDA5] rounded-[20px] p-6 md:pl-10 mb-4 text-background">
              <h6
                className={`text-right text-[40px] md:text-[4vw] ${satoshiMedium.className} leading-[1] tracking-tighter`}
              >
                {latestRelease.title}
              </h6>
              <div className="flex gap-4 justify-end items-center mb-10 mt-4">
                <div className="h-[1px] w-[8rem] bg-background opacity-50"></div>
                <div
                  className={`uppercase text-[22px] md:text-[32px] ${satoshiMedium.className} tracking-tighter`}
                >
                  {latestRelease.artistName}
                </div>
              </div>
            </div>
            {/* IMAGE OF ARTIST WITH CLOUDINARY IMAGE */}
            <div className="w-full rounded-[20px]">
              <CloudImage
                image={latestRelease.artistImage}
                width={1280}
                height={720}
                alt={`latest release artist ${latestRelease.artistName}`}
                className="rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestRelease;
