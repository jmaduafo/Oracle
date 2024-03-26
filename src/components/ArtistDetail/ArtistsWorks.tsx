import React, { useState } from "react";
import { satoshiRegular, satoshiMedium } from "@/styles/fonts";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Collections, ArtistProps } from "@/type/types";
import { allArtists } from "@/utils/artistData";
import Link from "next/link";

type Works = {
  activeSelect: string;
  setActiveSelect: React.Dispatch<React.SetStateAction<string>>;
  selectedCollectionArray: Collections[] | undefined | null;
  setSelectedCollectionArray: React.Dispatch<
    React.SetStateAction<Collections[] | null | undefined>
  >;
  artistInfo: ArtistProps;
  // setArtistInfo?: React.Dispatch<React.SetStateAction<ArtistProps | null | undefined>>;
  setSpotifyEmbed: React.Dispatch<React.SetStateAction<string | null>>;
  setIsSpotifyOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function ArtistsWorks({
  activeSelect,
  setActiveSelect,
  selectedCollectionArray,
  setSelectedCollectionArray,
  artistInfo,
  setSpotifyEmbed,
  setIsSpotifyOpen
}: Works 
) {

  const select = ["Albums", "EPs", "Singles"];

  function activeSelection(selection: string) {
    setActiveSelect(selection);
    if (selection === 'Albums') {
      setSelectedCollectionArray(artistInfo.albums)
    } else if (selection === 'EPs') {
      setSelectedCollectionArray(artistInfo.eps)
    } else if (selection === 'Singles') {
      setSelectedCollectionArray(artistInfo.singles)
    }
  }

  return (
    <div className="">
      {/* BUTTONS FOR THE ALUBM, EP, AND SINGLES SELECTION */}
      <div className="flex items-center justify-center gap-10 z-[10]">
        {select.map((sel) => {
          return (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => activeSelection(sel)}
              className={`${
                satoshiRegular.className
              } px-8 py-1 hover:bg-accent hover:text-background duration-[.3s] rounded-full border-[1.5px] border-accent cursor-pointer z-[10] ${
                activeSelect === sel
                  ? "bg-accent text-background"
                  : "bg-transparent text-white"
              }`}
              key={sel}
            >
              {sel}
            </motion.p>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        {/* PREVIOUS ARTIST BUTTON */}
        <div className="z-[10]">
          {allArtists.length > 1 &&
            <Link href={`/artists/${allArtists[(((allArtists.length + artistInfo.id) - 1) - 1) % allArtists.length ].artistName}`}>
              <p>Previous Artist</p>
            </Link>
          }
        </div>
        {/* COLLECTIONS DISPLAY */}
        <div className="z-[10] flex items-center gap-6">
          <div className="collectionScroll lg:w-[40vw] sm:w-[60vw] w-[85vw] rounded-2xl overflow-x-auto p-2">
            <div className="w-fit flex flex-nowrap gap-4">
              {activeSelect === 'Albums' && artistInfo.albums.length ?
                artistInfo.albums.map(ele => {
                  return (
                    <div onClick={() => {setSpotifyEmbed(ele.spotifyEmbedded); setIsSpotifyOpen(true)}} key={ele.name} className="cursor-pointer w-[120px] h-[120px] bg-white rounded-xl">
                      
                    </div>
                  )
                })
                :
                (
                  activeSelect === 'EPs' && artistInfo.eps.length ?
                    artistInfo.eps.map(ele => {
                      return (
                        <div onClick={() => {setSpotifyEmbed(ele.spotifyEmbedded); setIsSpotifyOpen(true)}} key={ele.name} className="cursor-pointer w-[120px] h-[120px] bg-white rounded-xl"></div>
                      )
                    })
                    :
                    (
                      activeSelect === 'Singles' && artistInfo.singles.length ?
                        artistInfo.singles.map(ele => {
                          return (
                            <div onClick={() => {setSpotifyEmbed(ele.spotifyEmbedded); setIsSpotifyOpen(true)}} key={ele.name} className="cursor-pointer w-[120px] h-[120px] bg-white rounded-xl"></div>
                          )
                        })
                        :
                        <div className="h-[120px] w-[600px] flex justify-center items-center">
                          <p className={`${satoshiMedium.className}`}>None available</p>
                        </div>
                        

                    )
                )
              }
            </div>
          </div>
        </div>
        {/* NEXT ARTIST BUTTON */}
        <div className="z-[10]">
        {allArtists.length > 1 &&
            <Link href={`/artists/${allArtists[((artistInfo.id - 1) + 1) % allArtists.length ].artistName}`}>
              <p>Next Artist</p>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default ArtistsWorks;
