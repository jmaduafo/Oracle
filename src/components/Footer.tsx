import { reverie, satoshiRegular } from '@/styles/fonts'
import React from 'react'
import Instagram from '../../public/socials/icons8-instagram-50.png'
import Tiktok from '../../public/socials/icons8-tiktok-50.png'
import TalkImage from '../../public/images/letsTalk.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  const socials= [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/',
      alt: 'instagram logo'
    },
    {
      icon: Tiktok,
      href: 'https://www.tiktok.com/',
      alt: 'tiktok logo',
    }

  ]

  const details = [
    {
      title: 'phone',
      field: '(100) 123 456 7890',
    },
    {
      title: 'address',
      field: 'Victoria Island, Lagos, Nigeria',
    }
  ]

  const navMenu = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/#about",
      title: "about",
    },
    {
      href: "/artists",
      title: "artists",
    },
    {
      href: "/#gallery",
      title: "gallery",
    },
    {
      href: "/contact",
      title: "contact",
    },
  ];

  return (
    <footer className='px-6'>
      <div className='border-t-[1px] border-t-text30'>
        <h5 className={`${reverie.className} text-center text-[8vw] mt-[12rem]`}>oracleofthugs@gmail.com</h5>
        <div className='flex md:flex-row md:items-end md:gap-[4rem] flex-col-reverse'>
          <div className='md:basis-[75%]'>
            {/* PHONE NUMBER AND ADDRESS DETAILS */}
            <div className='flex items-center justify-end gap-8'>
              <div className='w-[1px] h-[10rem] bg-text30'></div>
              <div>
                <div>
                  {details.map(det => {
                    return (
                      <p key={det.title} className={`${satoshiRegular.className} relative w-fit text-[22px]`}>{det.field}<span className='absolute h-[2px] bg-white w-full top-full left-0'></span></p>
                    )
                  })}
                </div>
                <div className='flex items-center gap-2 mt-4'>
                  {socials.map(soc => {
                    return (
                      <a key={soc.alt} target='_blank' href={soc.href}>
                        <Image
                          src={soc.icon}
                          alt={soc.alt}
                          className='w-[25px]'
                          />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* ALL RIGHTS RESERVED AND NAV LINKS  */}
            <div className='flex mt-5 mb-3 md:mb-2'>
              <ul className='flex-[2.5] flex items-center gap-6'>
                {navMenu.map(nav => {
                  return (
                    <li key={nav.title} className='text-[14px]'>
                      <Link href={nav.href}>{nav.title}</Link>
                    </li>
                  )
                })}
              </ul>
              <div className='flex-1'>
                <p className='text-[14px]'>All Rights Reserved</p>
              </div>
            </div>
          </div>
          <div className='md:basis-[25%]'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <div className='relative flex items-center justify-center mt-[4rem] mb-[4rem]'>
              <div className='absolute w-[15vw] object-cover animate-spin-slow'>
                <Image
                  src={TalkImage}
                  alt='radial spinning text'
                  placeholder='blur'/>
              </div>
              <h6 className={`${reverie.className} text-accent text-[7vw]`}>o</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer