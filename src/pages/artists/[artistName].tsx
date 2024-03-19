"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allArtists } from "@/utils/artistData";
import { ArtistProps, Collections } from "@/type/types";
import { usePathname } from "next/navigation";
import Cover from "@/components/Cover";
import ArtistsWorks from "@/components/ArtistDetail/ArtistsWorks";
import SpotifyEmbed from "@/components/ArtistDetail/SpotifyEmbed";
import { reverie, satoshiMedium } from "@/styles/fonts";
import SpinningStar from "@/components/SpinningStar";
import { SocialIcon } from 'react-social-icons'

function ArtistPage() {  
  const router = useRouter();
  const { artistName } = router.query;
  
  const { push } = useRouter();
  
  // Get artist name in path
  const pathname = usePathname();
  // Gets the name of the artist that is being shown
  const artistSplit = pathname?.split("/")[2]?.split("%20")?.join(" ");
  
  // Gets artist data
  const [artistInfo, setArtistInfo] = useState<ArtistProps | undefined | null>(
    null
    );
  // const [artistIndex, setArtistIndex] = useState<number | null>(
  //   null
  //   );
    
    const [artist, setArtist] = useState(artistSplit);
    
    // The selected button of either Albums, EPs, or Singles
    const [activeSelect, setActiveSelect] = useState("Albums");
    
    // Spotify Embed states
    const [isSpotifyOpen, setIsSpotifyOpen] = useState<boolean>(false);
    // Gets the clicked image and spotify embed of the album, single, or ep selected
    const [spotifyEmbed, setSpotifyEmbed] = useState<Collections | null>(null);
    
    // The collection of Singles, EPs, or Albums based on the selection
    const [selectedCollectionArray, setSelectedCollectionArray] = useState<
    Collections[] | null | undefined
    >(null);
    
    useEffect(
      function () {
        // Finds where the artist name matches the artist from the data file
        setArtistInfo(
          allArtists.find((artist) => artist.artistName === artistName)
          );

        },          
        [pathname]
      );
        
    function socialsIcon(social: string, href: string) {
      if (social.toLowerCase() === 'spotify') {
        return <SocialIcon network="spotify" target='_blank' url={href} fgColor="#FA9600" bgColor="transparent"/>
      } else if (social.toLowerCase() === 'instagram') {
        return <SocialIcon network="instagram" target='_blank' url={href} fgColor="#FA9600" bgColor="transparent"/>
      } else if (social.toLowerCase() === 'tiktok') {
        return <SocialIcon network="tiktok" target='_blank' url={href} fgColor="#FA9600" bgColor="transparent"/>
      } 
      
    }
        
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
        <section className="md:h-[90vh] flex flex-col">
          {/* BACKGROUND IMAGE AND COVER */}
          <div
            className="z-[-1] w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${artistInfo.landscapeImage})` }}
          ></div>
          <Cover visible rounded={false}>
            {""}
          </Cover>
          {/* SPOTIFY EMBEDDED AND ARTIST INFORMATION CONTAINER */}
          <div className="z-[10] md:px-[6rem] px-10 flex md:flex-row md:justify-between flex-col-reverse gap-10 mt-[5rem]">
            {/* SPOTIFY EMBEDDED LOGIC */}
            <SpotifyEmbed
              isSpotifyOpen={isSpotifyOpen}
              setIsSpotifyOpen={setIsSpotifyOpen}
            />
            {/* ARTIST INFO WITH ARTIST NAME, TITLES, AND DESCRIPTION */}
            <div className="flex items-end gap-8">
              <div className="md:max-w-[40vw]">
                <h6 className={`${reverie.className} uppercase md:text-[6vw] text-[5rem] leading-[.8]`}>{artistInfo.artistName}</h6>
                <div className="md:pl-[5rem] pl-[1.5rem]">
                  <div className="flex items-center gap-5 w-fit">
                    {artistInfo && artistInfo.artistTitles.map((title, index) => {
                      return (
                        <Fragment key={title}>
                          <p className={`${satoshiMedium.className} md:text-[50px] text-[36px]`}>{title}</p>
                          {
                            index !== artistInfo.artistTitles.length - 1 
                            &&
                            <SpinningStar size='30px'/>
                          }
                        </Fragment>
                      )
                    })}
                  </div>
                  <p className="">{artistInfo && artistInfo.desc}</p>
                </div>
              </div>
              {/* ARTIST SOCIAL ICONS AND LINKS */}
              <div className="flex flex-col">
                {artistInfo && artistInfo.socials.map(social => {
                  return (
                    <Fragment key={social.social}>
                      {socialsIcon(social.social, social.link)}
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
          {/* ARTIST ABLUMS, EPs, AND SINGLES  */}
          <div className="mt-auto mb-[4rem]">
            <ArtistsWorks
              activeSelect={activeSelect}
              setActiveSelect={setActiveSelect}
              selectedCollectionArray={selectedCollectionArray}
              setSelectedCollectionArray={setSelectedCollectionArray}
              artistInfo={artistInfo}
              setArtistInfo={setArtistInfo}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default ArtistPage;
