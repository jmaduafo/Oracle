import Gallery1 from '../../public/gallery/gallery1.png'
import Gallery2 from '../../public/gallery/gallery2.png'
import Gallery3 from '../../public/gallery/gallery3.jpg'
import Gallery4 from '../../public/gallery/gallery4.jpg'
import { GalleryImagesProps, GalleryProps } from '@/type/types'

const images = [
    {
      image: Gallery1,
    },
    {
      image: Gallery2,
    },
    {
      image: Gallery3,
    },
    {
      image: Gallery4,
    }
]

// DO NOT MODIFY

// Set up an array of the images above
const galleryImages : GalleryProps[] = []

images.forEach((item) => {
    galleryImages.push(item)
})

// A repeat of the gallery images array into another array 8 times
const allGalleryImages : GalleryProps[]  = []

let n = 0;

while (n <= 7) {
    galleryImages.forEach(item => {
        allGalleryImages.push(item)
    })

    n++
}

// Full array with unique ids based on the index
export const repeatedGalleryImages : GalleryImagesProps[]  = []

allGalleryImages.forEach((item, index) => {
    repeatedGalleryImages.push({... item, id: index + 1})
})

// DO NOT MODIFY