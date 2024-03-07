import React, { Fragment } from "react";
import { allArtists } from "@/utils/artistData";
import { reverie, satoshiRegular } from "@/styles/fonts";
import Link from "next/link";
import Cover from "../Cover";

function AllArtists() {
  return (
    <section>
      <div>
        <h1
          className={`${reverie.className} text-[12vw] tracking-tight text-center`}
        >
          all artists ({allArtists.length})
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[70%] mx-auto">
          {allArtists.map((artist) => {
            return (
                <div
                    key={artist.id}
                    className="relative w-[16rem] h-[16rem] rounded-full bg-cover bg-no-repeat bg-center group"
                    style={{ backgroundImage: `url(${artist.portraitImage})` }}
                    >
                    <Link href={`/artists/${artist.artistName}`}>
                        <Cover rounded>
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
