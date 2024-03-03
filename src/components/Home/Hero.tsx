import React, { useRef } from 'react'
import { reverie } from '@/styles/fonts'
import Image from 'next/image'
import { HeroImagesProps } from '@/type/types'
import Mula1 from '../../../public/images/mula1.jpg'
import Mula2 from '../../../public/images/mula2.jpg'
import Mula3 from '../../../public/images/mula3.jpg'
import Mula4 from '../../../public/images/mula6.jpg'
import Mula5 from '../../../public/images/mula5.jpg'

import { motion, useTransform } from 'framer-motion'

function Hero() {

  const pictures: HeroImagesProps[] = [
    {
      image: Mula1,
      alt: 'j mula looking up at the clouds',
      rotate: 'rotate-[5deg]',
      zIndex: 'z-[7]'
    },
    {
      image: Mula2,
      alt: 'j mula in a mask',
      rotate: 'rotate-[-4deg]',
      zIndex: 'z-[6]'
    },
    {
      image: Mula3,
      alt: '',
      rotate: 'rotate-[7deg]',
      zIndex: 'z-[5]'
    },
    {
      image: Mula4,
      alt: '',
      rotate: 'rotate-[-1deg]',
      zIndex: 'z-[4]'
    },
    {
      image: Mula5,
      alt: '',
      rotate: 'rotate-[3deg]',
      zIndex: 'z-[3]'
    }
  ]

  return (
    <section className='h-screen'>
      <div className='relative flex items-end justify-center h-[85vh] md:h-full'>
        <div className='bg-white'>
          {pictures.map(pic => {
            return (
              <div className={`${pic.rotate} ${pic.zIndex} absolute transform top-[50%] md:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65vw] h-[70vhh] md:w-[25vw] md:h-[65vh] object-cover`} key={pic.rotate}>
                <Image
                  src={pic.image}
                  alt={pic.alt}
                  style={{ width: '100%', height: '100%'}}
                  placeholder='blur'
                  />
              </div>
            )
          })}
        </div>
        <h1 className={`${reverie.className} z-[10] text-[30vw] tracking-tighter text-center`}>ORACLE</h1>
      </div>
    </section>
  )
}

export default Hero