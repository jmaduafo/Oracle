import { ArtistProps } from "../type/types"

const artists = [
    {
        artistName: "J Mula",
        desc: 'Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.',
        artistTitles: ['founder', 'rapper'],
        socials: {
            spotify: null,
            twitter: null,
            instagram: null,
            tiktok: null
        },
        albums: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'string'
            }
        ],
        eps: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'string'
            }
        ],
        singles: [
            {
                name: 'string',
                image: 'string',
                spotifyEmbedded: 'string'
            }
        ],
        landscapeImage: '',
        portraitImage: 'https://res.cloudinary.com/dyxxn831a/image/upload/v1709734958/oracle%20music/PHOTO-2024-02-25-18-40-48_-_Copy_2_ucerzk.jpg' 
    }
]

export let allArtists : ArtistProps[] = []

artists.forEach((item, index) => {
    allArtists.push({... item, id: index + 1})
})