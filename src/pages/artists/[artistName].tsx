"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allArtists } from "@/utils/artistData";
import { ArtistProps } from "@/type/types";
import { usePathname } from "next/navigation";
import CloudImage from "@/components/CloudImage";

function ArtistPage() {
  const router = useRouter();
  const { artistName } = router.query;
  const pathname = usePathname();

  const [artistInfo, setArtistsInfo] = useState<ArtistProps | undefined | null>(
    null
  );

  useEffect(
    function () {
      setArtistsInfo(
        allArtists.find((artist) => artist.artistName === artistName)
      );
      console.log(artistInfo);
    },
    [pathname]
  );

  if (artistInfo === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {artistInfo ? (
        <section className="h-[90vh]">
          <CloudImage
            image={artistInfo.landscapeImage}
            width={1920}
            height={1080}
            alt={`${artistInfo.artistName}`}
            className="w-full h-full absolute top-0 left-0 z-[-1]"
          />
          <div></div>
        </section>
      ) : (
        <p>Artists not found</p>
      )}
    </>
  );
}

export default ArtistPage;
