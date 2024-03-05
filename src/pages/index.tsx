// 'use client'
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import LatestRelease from "@/components/Home/LatestRelease";
import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Home() {

  // Lenis Smooth Scroll
//   useEffect(function() {
//     const lenis = new Lenis()
    
//     function raf(time: number) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//     }
    
//     requestAnimationFrame(raf)
// }, [])

  return (
    <div className="">
      <Hero/>
      <About/>
      <LatestRelease/>
    </div>
  );
}
