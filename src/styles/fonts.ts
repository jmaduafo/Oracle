import { Inter } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ["latin"] });

export const reverie = localFont({
  src: "../../public/fonts/reverie-regular-personal-use-only.otf"
})

export const satoshiLight = localFont({
  src: "../../public/fonts/Satoshi-Light.otf"
})

export const satoshiRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.otf"
})

export const satoshiMedium = localFont({
  src: "../../public/fonts/Satoshi-Medium.otf"  
})

export const satoshiBold = localFont({
  src: "../../public/fonts/Satoshi-Bold.otf"
})

export const satoshiItalic = localFont({
  src: "../../public/fonts/Satoshi-Italic.otf"
})