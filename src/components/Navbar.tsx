"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/images/mulaLogo.png'
import Link from 'next/link'
import Menu from './Menu'
import { usePathname } from "next/navigation"

function Navbar() {
  const [ isMenuClicked, setIsMenuClicked ] = useState<boolean>(false)

  const pathname : string = usePathname()

  function handleMenu() {
    setIsMenuClicked(prev => !prev)
  }
  
  return (
    <div className='relative z-[90]'>
    <Menu 
      isMenuClicked={isMenuClicked}
      setIsMenuClicked={setIsMenuClicked}
      />
    <header>
      <nav className={`sm:px-[6rem] flex ${isMenuClicked ? 'justify-end py-[50px]' : 'justify-between py-5'} items-center px-[30px] py-5`}>
        <div className={`${isMenuClicked ? 'hidden' : 'block'} duration-[.4s]`}>
          <Link href={'/'}>
            <Image
              src={logo}
              alt='white oracle music of t.h.u.g.s. music logo'
              width={60}
              />
          </Link>
        </div>
        <div>
          <ul className='sm:flex items-center gap-6 hidden'>
            <li className={`text-[14px] ${pathname === '/#about' ? 'text-white' : 'text-text'} hover:text-white duration-[.3s]`}><Link href='/#about'>about</Link></li>
            <li className={`text-[14px] ${pathname === '/artists' ? 'text-white' : 'text-text'} hover:text-white duration-[.3s]`}><Link href='/artists'>artists</Link></li>
            <li className={`text-[14px] ${pathname === '/#gallery' ? 'text-white' : 'text-text'} hover:text-white duration-[.3s]`}><Link href='/#gallery'>gallery</Link></li>
            <li className={`text-[14px] ${pathname === '/contact' ? 'text-white' : 'text-text'} hover:text-white duration-[.3s]`}><Link href='/contact'>contact</Link></li>
          </ul>
        </div>
        <div onClick={handleMenu} className='sm:hidden flex flex-col gap-[5px] cursor-pointer z-[90]'>
          <MenuBars
            isMenuClicked={isMenuClicked}/>
        </div>
      </nav>
    </header>
  </div>
  )
}

export default Navbar

function MenuBars({ isMenuClicked }: { readonly isMenuClicked: boolean}) {  
  return (
    <>
      <div className={`${isMenuClicked ? 'rotate-[35deg] translate-y-[7px]' : 'rotate-0'} duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}></div>
      <div className={`${isMenuClicked ? 'opacity-0' : 'opacity-1'} duration-[.4s] h-[2px] w-[4.5rem] bg-text`}></div>
      <div className={`${isMenuClicked ? 'rotate-[-35deg] translate-y-[-7px]' : 'rotate-0'} duration-[.4s] transform h-[2px] w-[4.5rem] bg-text`}></div>
    </>
  )
}