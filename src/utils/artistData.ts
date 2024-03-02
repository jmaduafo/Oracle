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
        portraitImage: '' 
    }
]

export const allArtists: object[] = []

artists.forEach((item: ArtistProps, index: number) => {
    allArtists.push({... item, id: index + 1})
})