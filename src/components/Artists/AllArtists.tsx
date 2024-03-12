import React, { Fragment } from "react";
import { allArtists } from "@/utils/artistData";
import { reverie, satoshiRegular } from "@/styles/fonts";
import Link from "next/link";
import Cover from "../Cover";

function AllArtists() {
  return (
    <section className="px-5">
      <div className="mb-[4rem] border-b-[1px] border-b-text30 pb-[4rem]">
        <h1
          className={`${reverie.className} text-[12vw] tracking-tight text-center mb-8`}
        >
          all artists ({allArtists.length})
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:w-[90%] md:w-[75%] w-full place-items-center gap-y-12 mx-auto">
          {allArtists.map((artist) => {
            return (
                <div
                    key={artist.id}
                    className="relative xs:w-[16rem] xs:h-[16rem] w-[14rem] h-[14rem] rounded-full bg-cover bg-no-repeat bg-center group"
                    style={{ backgroundImage: `url(${artist.portraitImage})` }}
                    >
                    <Link href={`/artists/${artist.artistName}`}>
                        <Cover visible={false} rounded>
                            <p className={`${satoshiRegular.className} text-white uppercase text-[20px]`}>{artist.artistName}</p>
                        </Cover>
                    </Link> 
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllArtists;
