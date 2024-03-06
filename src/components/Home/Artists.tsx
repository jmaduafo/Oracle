import React, { Fragment, useState } from "react";
import { reverie, satoshiRegular } from "@/styles/fonts";
import { allArtists } from "@/utils/artistData";
import { HomeArtistProps, Cursor } from "@/type/types";
import CloudImage from "../CloudImage";
import SpinningStar from "../SpinningStar";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

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
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  function windowMouse(e: React.MouseEvent<HTMLDivElement>) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={windowMouse}
      className={`${isHovered ? 'cursor-none' : 'cursor-default'} relative py-6 px-8 flex group`}
    >
      <CursorHover x={x} y={y} isHovered={isHovered} />
      <div className="flex-[2] flex flex-col">
        <div>
          <h4 className={`${reverie.className} text-[7vw] mb-[-.2em]`}>
            {artistName}
          </h4>
          <div className="flex items-center gap-3">
            <p className="text-[20px]">{albums.length} Albums</p>
            <SpinningStar size="10px" />
            <p className="text-[20px]">{eps.length} EPs</p>
            <SpinningStar size="10px" />
            <p className="text-[20px]">{singles.length} Singles</p>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-auto">
          {artistTitles.map((title) => {
            return (
              <p key={title} className="capitalize text-[20px]">
                {title}
              </p>
            );
          })}
        </div>
      </div>
      <motion.div className="flex-[1.5] max-h-[45vh] w-full object-cover">
        <CloudImage
          image={landscapeImage}
          width={1920}
          height={1080}
          alt={`image of ${artistName}`}
          className="w-full h-full duration-[.4s] group-hover:scale-[.95]"
        />
      </motion.div>
    </div>
  );
}

function CursorHover({ x, y, isHovered }: Cursor) {
  const easing = [0.11, 0, 0.5, 0];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5, x: x, y: y }}
        exit={{ opacity: isHovered ? 0 : 1, scale: isHovered ? .5 : 1 }}
        transition={{ duration: 0.5, ease: easing }}
        // Makes sure that cursor is invisible when page first loads
        className={`${
          isHovered ? "visible" : "invisible"
        } z-[100] fixed top-0 left-0 pointer-events-none rounded-full w-[100px] h-[100px] bg-white flex justify-center items-center`}
        >
        <ArrowUpRightIcon className="w-10 h-10" color="#FA9600" strokeWidth={1} />
      </motion.div>
    </AnimatePresence>
  );
}
