import React from 'react'
import { MusicalNoteIcon, XMarkIcon } from "@heroicons/react/24/solid";

function SpotifyEmbed({ isSpotifyOpen, setIsSpotifyOpen }: { isSpotifyOpen: boolean, setIsSpotifyOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className='z-[10]'>
      {isSpotifyOpen ? 
      <button onClick={() => setIsSpotifyOpen(false)} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
        <XMarkIcon color='#FA9600' className='w-6 h-6 duration-[.4s]' />
      </button>
      :
      <button onClick={() => setIsSpotifyOpen(true)} className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
        <MusicalNoteIcon color='#FA9600' className='w-6 h-6 duration-[.4s]' />
      </button>}
    </div>
  )
}

export default SpotifyEmbed