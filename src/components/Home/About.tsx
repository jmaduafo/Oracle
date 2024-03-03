import React from 'react'
import Image from 'next/image'
import { reverie, satoshiMedium } from '@/styles/fonts'
import star from '../../../public/images/smallStar.png'
import SpinningStar from '../SpinningStar'

function About() {
  return (
    <>
      <section className=''>
        <div className=''>
          <div className='w-[80%] mx-auto my-0'>
            <div className='flex items-center gap-6'>
                <h5 className={`${satoshiMedium.className} tracking-tighter text-[6vw]`}>Lorem <span className={`${reverie.className} text-[6vw]`}>ipsum</span></h5>
                <SpinningStar size='5vw'/>
            </div>
            <div className='mt-[-3em]'>
                <h5 className={`${satoshiMedium.className} indent-[10%] tracking-tighter text-[6vw]`}>dolor sit amet.</h5>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO ABOUT SECTION WITH COLOR DODGE BACKGROUND*/}
      <section>
        <div className='relative sm:h-[40vh] md:h-[65vh] xl:[80vh] h-[30vh] overflow-hidden flex items-end'>
          <video className='absolute w-full mix-blend-color' autoPlay loop muted preload="none">
            <source src="https://res.cloudinary.com/dyxxn831a/video/upload/v1709491474/oracle%20music/mula_vid_mp4_gl6cba.mp4" type="video/mp4" />
          </video>
          <div className='px-10 pb-4'>
            <SpinningStar size='50px'/>
            <h4 className={`${satoshiMedium.className} mt-6 text-[3.5vw] tracking-tight leading-tight uppercase`}>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default About