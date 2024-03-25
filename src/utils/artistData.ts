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
            
        ],
        eps: [
            {
                name: 'Wavy Hours',
                image: 'string',
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6kaasC7r7lZRBrsjXMtlmz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            }
        ],
        singles: [
            {
                name: 'Already Know',
                image: 'string',
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2P7QMicXyccJl4tr71Bk7E?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Night Show',
                image: 'string',
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5CSpu9BuRGyx0uMksnHjpg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Juug and Slide',
                image: 'string',
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5wp5Mg1Q6P6kdFT7mqGTsv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
            {
                name: 'Victor Osimhen (Remix)',
                image: 'string',
                spotifyEmbedded: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6sysWxQYrm4h6NpPsnxhxe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
            },
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