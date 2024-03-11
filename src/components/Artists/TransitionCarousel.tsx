import React, { useState, useEffect } from 'react'
import { reverie, satoshiMedium } from '@/styles/fonts'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Picture from '../../../public/images/misc2.jpg'
import { carousel } from '@/utils/artistTransition'

function TransitionCarousel() { 
    const firstPart = 'Taking it one'
    const secondPart = 'step further'
  return (
    <section>
        <div className='px-5 flex items-center flex-wrap gap-[3vw]'>
            {firstPart.split(' ').map((part, index) => {
                return (
                    <div key={`part_${index + 1}`}>
                        <h2 className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}>{part}</h2>
                    </div>
                )
            })}
            <div className='w-[35vw] h-[100px] rounded-xl object-cover object-top'>
                <Image
                    src={Picture}
                    alt='sky during sunset'
                    placeholder='blur'
                    className='w-full h-full rounded-full'/>
            </div>
            {secondPart.split(' ').map((part, index) => {
                return (
                    <div key={`part_${index + 1}`}>
                        <h2 className={`${satoshiMedium.className} text-[12vw] tracking-tighter leading-[0.8] uppercase`}>{part}</h2>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default TransitionCarousel