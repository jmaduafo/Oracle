import React, { Fragment } from "react";
import { reverie, satoshiRegular } from "@/styles/fonts";
import { allArtists } from "@/utils/artistData";
import { HomeArtistProps } from "@/type/types";
import CloudImage from "../CloudImage";
import SpinningStar from "../SpinningStar";

function Artists() {
  return (
    <section>
      <div className="px-5">
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
                  portraitImage={artist.portraitImage}
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
  portraitImage,
  albums,
  eps,
  singles,
}: HomeArtistProps ) {
  return (
    <div className="py-4 px-8 flex">
      <div className="flex-[2]">
        <div>
          <h4 className={`${reverie.className} text-[7vw] mb-[-.2em]`}>{artistName}</h4>
          <div className="flex items-center gap-3">
            <p>{albums.length} Albums</p>
            <SpinningStar size="10px"/>
            <p>{eps.length} EPs</p>
            <SpinningStar size="10px"/>
            <p>{singles.length} Singles</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {artistTitles.map(title => {
            return (
              <p className="capitalize">{title}</p>
            )
          })}
        </div>
      </div>
      <div className="flex-[1] w-full max-h-[30vh] object-cover">
        <CloudImage
          image={portraitImage}
          width={1920}
          height={1080}
          alt={`image of ${artistName}`}
          className="w-full h-full"/>
      </div>
    </div>
  );
}
