import React, { Fragment, useState } from "react";
import { reverie, satoshiRegular } from "@/styles/fonts";
import { allArtists } from "@/utils/artistData";
import { HomeArtistProps, Cursor } from "@/type/types";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import CustomCursor from "../CustomCursor";
import CloudImage from "../CloudImage";
import SpinningStar from "../SpinningStar";
import { motion, AnimatePresence } from "framer-motion";
import { SOrNoS } from "@/utils/miscellaneous";
import Link from "next/link";

function Artists() {
  return (
    <section>
      <div className="px-5 mt-[8rem]">
        <div className="border-t-[1px] border-t-text30 border-b-[1px] border-b-text30">
          <h2
            className={`text-center ${satoshiRegular.className} text-[25vw] tracking-tight my-[-.3em]`}
          >
            ARTISTS
          </h2>
        </div>
        <div>
          {allArtists.map((artist) => {
            return (
              <Fragment key={artist.id}>
                <ArtistContainer
                  artistName={artist.artistName}
                  artistTitles={artist.artistTitles}
                  landscapeImage={artist.landscapeImage}
                  albums={artist.albums}
                  eps={artist.eps}
                  singles={artist.singles}
                />
              </Fragment>
            );
          })}
        </div>
        {/* ARTISTS SECTION BUTTON WITH ARROW */}
        <div
          className="flex justify-center items-center mt-[5rem]"
          id="gallery"
        >
          <Link href="/artists">
            <div className="px-6 py-2 flex items-center cursor-pointer gap-8 w-fit rounded-[30px] border-[1.5px] border-accent group hover:bg-accent duration-[.4s]">
              <button
                className={`${satoshiRegular.className} text-white md:text-[24px] text-[18px] group-hover:text-background duration-[.4s]`}
              >
                VIEW ARTISTS
              </button>
              <ArrowRightIcon
                color="#fff"
                className="md:w-7 md:h-7 w-5 h-5 duration-[.4s] group-hover:translate-x-[10px] group-hover:text-background"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Artists;

function ArtistContainer({
  artistName,
  artistTitles,
  landscapeImage,
  albums,
  eps,
  singles,
}: HomeArtistProps) {
  // Initializing x and y for the cursor when hovered
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX);
    setY(e.clientY);
  }

  return (
    <Link href={`/artists/${artistName}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={windowMouse}
        className={`${
          isHovered ? "cursor-none" : "cursor-default"
        } border-b-[1px] border-b-text30 relative py-6 md:px-8 flex md:flex-row flex-col-reverse group`}
      >
        <CustomCursor
          x={x}
          y={y}
          isHovered={isHovered}
          className="md:w-[120px] md:h-[120px] w-[90px] h-[90px] bg-white"
        >
          <ArrowUpRightIcon
            className="md:w-12 md:h-12 w-9 h-9"
            color="#FA9600"
            strokeWidth={1.5}
          />
        </CustomCursor>
        <div className="md:flex-[2] flex flex-col md:mt-0 mt-6">
          <div>
            <h4
              className={`${reverie.className} md:text-[7vw] text-[60px] mb-[-.2em] md:text-left text-center`}
            >
              {artistName}
            </h4>
            <div className="flex items-center md:justify-start justify-center gap-3">
              <p className="text-[20px]">
                {albums.length} Album{SOrNoS(albums)}
              </p>
              <SpinningStar size="10px" />
              <p className="text-[20px]">
                {eps.length} EP{SOrNoS(eps)}
              </p>
              <SpinningStar size="10px" />
              <p className="text-[20px]">
                {singles.length} Single{SOrNoS(singles)}
              </p>
            </div>
          </div>
          <div className="flex items-center md:justify-start justify-center gap-6 mt-auto">
            {artistTitles.map((title) => {
              return (
                <p key={title} className="capitalize text-[20px]">
                  {title}
                </p>
              );
            })}
          </div>
        </div>
        <motion.div className="md:flex-[1.5] max-h-[45vh] w-full object-cover">
          <CloudImage
            image={landscapeImage}
            width={1920}
            height={1080}
            alt={`image of ${artistName}`}
            className="w-full h-full duration-[.4s] group-hover:scale-[.95] group-hover:ease-[cubic-bezier(0.85, 0, 0.15, 1)]"
          />
        </motion.div>
      </div>
    </Link>
  );
}