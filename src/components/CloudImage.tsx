'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary'


function CloudImage({image, width, height, alt, className}: {image: string, width: number, height: number, alt: string, className?: string}) {
  return (
    <CldImage
        src={image}
        width={width}
        height={height}
        alt={alt}
        className={className}
    />
  )
}

export default CloudImage