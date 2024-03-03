import React from 'react'
import star from '../../public/images/regularStar.png'
import Image from 'next/image'

function SpinningStar({ size }: { size: string }) {
  return (
    <div className={`animate-spin-smooth duration-[3s] object-fit`} style={{ width: size}}>
        <Image
            src={star}
            alt='neon green star'
            placeholder='blur'
            className='w-full h-full'
            />
    </div>
  )
}

export default SpinningStar