import { ArtistProps } from "../type/types"

// CAN BE MODIFIED
const artists = [
    {
        artistName: "J Mula",
        desc: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.',
        artistTitles: ['founder', 'rapper'],
        socials: [
            {
                social: 'spotify',
                link: 'https://instagram.com/'
            },
            {
                social: 'instagram',
                link: 'https://instagram.com/'
            },
        ],
        albums: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'albums'
            }
        ],
        eps: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'eps'
            }
        ],
        singles: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'singles'
            }
        ],
        landscapeImage: 'https://res.cloudinary.com/dyxxn831a/image/upload/v1709831073/oracle%20music/mula1_sd8rt5.jpg',
        portraitImage: 'https://res.cloudinary.com/dyxxn831a/image/upload/v1709734958/oracle%20music/PHOTO-2024-02-25-18-40-48_-_Copy_2_ucerzk.jpg' 
    },
    // {
    //     artistName: "George",
    //     desc: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.',
    //     artistTitles: ['rapper', 'producer'],
    //     socials: [
    //         {
    //             social: 'spotify',
    //             link: 'https://instagram.com/'
    //         },
    //         {
    //             social: 'instagram',
    //             link: 'https://instagram.com/'
    //         },
    //     ],
    //     albums: [
    //         {
    //             name: 'string',
    //             image: 'string',
    //             spotifyEmbedded: 'albums'
    //         }
    //     ],
    //     eps: [
    //         {
    //             name: 'string',
    //             image: 'string',
    //             spotifyEmbedded: 'eps'
    //         }
    //     ],
    //     singles: [
    //         {
    //             name: 'string',
    //             image: 'string',
    //             spotifyEmbedded: 'singles'
    //         }
    //     ],
    //     landscapeImage: 'https://res.cloudinary.com/dyxxn831a/image/upload/v1699919855/Sylvan/bathroom-interior-design-zoom-calls-with-plant_gxzjnz.jpg',
    //     portraitImage: 'https://res.cloudinary.com/dyxxn831a/image/upload/v1700057143/Sylvan/landon43_weuzjz.jpg' 
    // },
]


// DO NOT MODIFY
export let allArtists : ArtistProps[] = []

artists.forEach((item, index) => {
    allArtists.push({... item, id: index + 1})
})

// DO NOT MODIFY