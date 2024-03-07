// 'use client'
import React, { useEffect } from 'react'
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import LatestRelease from "@/components/Home/LatestRelease";
import Artists from "@/components/Home/Artists";
import Gallery from "@/components/Home/Gallery";

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
      <Artists/>
      <Gallery/>
    </div>
  );
}
