import React from 'react'
import { MusicalNoteIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Collections, ArtistProps } from '@/type/types';
import parse from 'html-react-parser';

type Spotify = {
  isSpotifyOpen: boolean; 
  setIsSpotifyOpen: React.Dispatch<React.SetStateAction<boolean>>; 
  spotifyEmbed: string | null;
  setSpotifyEmbed: React.Dispatch<React.SetStateAction<string | null>>;
  artistInfo: ArtistProps | null | undefined
}

function SpotifyEmbed({ isSpotifyOpen, setIsSpotifyOpen, spotifyEmbed, setSpotifyEmbed }: Spotify) {
  return (
    <div className='flex flex-col gap-10'>
      <div className='z-[10]'>
        {isSpotifyOpen ? 
        <button onClick={() => {setIsSpotifyOpen(false)}} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
          <XMarkIcon color='#FA9600' className='w-6 h-6 duration-[.4s]' />
        </button>
        :
        <button onClick={() => {setIsSpotifyOpen(true)}} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
          <MusicalNoteIcon color='#FA9600' className='w-6 h-6 duration-[.4s]' />
        </button>}
      </div>
      <div>
        {spotifyEmbed &&
          <div className={`${isSpotifyOpen ? 'visible' : 'invisible'}`}>
            {parse(spotifyEmbed)}
          </div> 
        }
      </div>
    </div>
  )
}

export default SpotifyEmbed