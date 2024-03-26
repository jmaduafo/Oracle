import React from 'react'
import { reverie } from '@/styles/fonts'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='bg-background h-[60vh] flex justify-center items-center'>
      <div className=''>
        <h1 className={`${reverie.className} text-[20vw] text-center leading-[1]`}>404</h1>
        <p className='uppercase text-[18px]'>It seems like you're in the wrong place. Please redirect to <span className='text-accent'><Link href='/'>home</Link></span></p>
      </div>
    </div>
  )
}

export default NotFound