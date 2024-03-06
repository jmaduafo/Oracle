import { StaticImageData } from "next/image";

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

export interface ArtistProps {
    id: number;  
    artistName: string;
    desc: string;
    artistTitles: string[];
    socials: Socials;
    albums: Albums[];
    eps: EPs[];
    singles: Singles[];
    landscapeImage: string;
    portraitImage: string;
}

export interface HomeArtistProps { 
    artistName: string;
    artistTitles: string[];
    albums: Albums[];
    eps: EPs[];
    singles: Singles[];
    portraitImage: string;
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

export type HeroImagesProps = {
    image: StaticImageData;
    alt: string;
    rotate: string;
    zIndex: string; 
}

export type AboutImagesProps = {
    image: StaticImageData;
    alt: string;
    width: string;
    position: string;
    zIndex: string;
}
