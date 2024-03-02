type Socials = {
    spotify: string | null;
    twitter: string | null;
    instagram: string | null;
    tiktok: string | null
}

type Albums = {
    name: string;
    image: string;
    spotifyEmbedded: string;
}

type EPs = {
    name: string;
    image: string;
    spotifyEmbedded: string;
}

type Singles = {
    name: string;
    image: string;
    spotifyEmbedded: string;
}

export type ArtistProps = {
    artistName: string;
    desc: string;
    artistTitles: string[];
    socials: Socials;
    albums: Albums[];
    eps: EPs[];
    singles: Singles[];
    landscapeImage: string;
    portraitImage: string    
}

export type LatestReleaseProps = {
    artistName: string;
    title: string;
    videoDirector: string;
    producer: string;
    manager: string;
    youtubeLink: string;
    artistImage: string;   
}