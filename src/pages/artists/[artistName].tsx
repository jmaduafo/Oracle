"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allArtists } from "@/utils/artistData";
import { ArtistProps } from "@/type/types";
import { usePathname } from "next/navigation";
import CloudImage from "@/components/CloudImage";
import Cover from "@/components/Cover";

function ArtistPage() {
  const router = useRouter();
  const { artistName } = router.query;
  
  const { push } = useRouter();

  const pathname = usePathname();
  const artistSplit = pathname?.split('/')[2]?.split('%20')?.join(' ')

  const [artistInfo, setArtistInfo] = useState<ArtistProps | undefined | null>(
    null
  );
  const [artist, setArtist] = useState(
    artistSplit
  );

  useEffect(
    function () {
      setArtistInfo(
        allArtists.find((artist) => artist.artistName === artistName)
      );
    },
    [pathname]
  );

  // useEffect(
  //   function () {
  //     if (artist === artistName && artistInfo === undefined) {
  //       push('/not-found')
  //     }
  //   },
  //   [artistInfo]
  // );

  return (
    <>
      {artistInfo && (
        <section className="h-[90vh]">
          {/* BACKGROUND IMAGE AND COVER */}
          <div className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${artistInfo.landscapeImage})`}}></div>
          <Cover visible rounded={false}>
          {''}
          </Cover>
          {/* SPOTIFY EMBEDDED AND ARTIST INFORMATION DIV */}
          <div>

          </div>
          {/* ARTIST ABLUMS, EPs, AND SINGLES  */}
          <div>

          </div>
        </section>
      )}
    </>
  );
}

export default ArtistPage;
