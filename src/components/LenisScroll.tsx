import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function LenisScroll() {
    useEffect(function() {
        const lenis = new Lenis()
        
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

  return (
    null
  )
}

export default LenisScroll