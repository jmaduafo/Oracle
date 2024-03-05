import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { satoshiLight } from '@/styles/fonts'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
 
export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

  return (
    <AnimatePresence>
        <main key={router.pathname} className={`${satoshiLight.className}`}>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </main>
    </AnimatePresence>
  )
}