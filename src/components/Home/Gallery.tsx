import React from 'react'
import Image from 'next/image'
import { repeatedGalleryImages } from '@/utils/gallery'
import Cover from '../Cover'
import InstagramIcon from '../../../public/socials/icons8-instagram-50.png'

function Gallery() {  
  return (
    <div className='relative mt-[8rem] mb-[4rem] group'>
      <a href='https://instagram.com' target='_blank'>
        <Cover rounded={false}>
            <Image
              src={InstagramIcon}
              alt='instagram logo'
              placeholder='blur'
              className='w-7 z-[8] ease-in-out'
              />
        </Cover>
      </a>
      <div className='relative gallery_carousel flex gap-2 w-fit'>
        {repeatedGalleryImages.map(img => {
          return (
            <div key={img.id} className='w-[20vw] max-h-[45vh] object-cover'>
              <Image
                src={img.image}
                alt={`oracle gallery image ${img.id}`}
                placeholder='blur'
                className='w-full h-full'
                />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery