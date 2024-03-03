import React from 'react'
import Image from 'next/image'
import { reverie, satoshiMedium } from '@/styles/fonts'
import star from '../../../public/images/smallStar.png'

function About() {
  return (
    <section className='relative overflow-y-hidden'>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full'>
          <div className='flex items-center gap-6'>
            <h3 className={`${satoshiMedium.className} tracking-tighter text-[5vw]`}>Lorem <span className={`${reverie.className} text-[5vw]`}>ipsum</span></h3>
            <div className=''>
              <Image
                src={star}
                alt='neon green star'
              />
            </div>
          </div>
        </div>
        {/* mix-blend-color */}
        <video className=' w-full mix-blend-color' autoPlay loop muted preload="none">
          <source src="https://res.cloudinary.com/dyxxn831a/video/upload/v1709491474/oracle%20music/mula_vid_mp4_gl6cba.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default About