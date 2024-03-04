import React from 'react'
import VideoPic from '../../../public/images/mula8.jpg'
import ArtistPic from '../../../public/images/mula1.jpg'
import Image from 'next/image'
import { latestRelease } from '@/utils/latestRelease'
import { satoshiMedium } from '@/styles/fonts'

function LatestRelease() {
  return (
    <section>
      <div className='px-5 mb-8'>
        <div className='flex items-center gap-5'>
          <div className='h-[1px] w-[30px] bg-text opacity-50'></div>
          <div className='uppercase'>Latest Release</div>
        </div>
        <div className='flex gap-4 mt-6 '>
          <div className='flex-[2]'>
            <div className='w-full'>
              <Image
                src={VideoPic}
                alt=''
                placeholder='blur'
                className='rounded-[20px]'
                />
            </div>
          </div>
          <div className='flex-[1]'>
            <div className='bg-[#DEFDA5] rounded-[20px] p-6 pl-10 mb-4 text-background'>
              <h6 className={`text-right text-[4vw] ${satoshiMedium.className} leading-[1] tracking-tighter`}>Take It For A Ride</h6>
              <div className='flex gap-4 justify-end items-center mb-10 mt-4'>
                <div className='h-[1px] w-[8rem] bg-background opacity-50'></div>
                <div className={`uppercase text-[32px] ${satoshiMedium.className} tracking-tighter`}>J Mula</div>
              </div>
            </div>
            <div className='w-full rounded-[20px]'>
            <Image
                src={ArtistPic}
                alt=''
                placeholder='blur'
                className='rounded-[20px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestRelease