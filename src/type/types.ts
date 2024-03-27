import { StaticImageData } from "next/image";

export type ContactForm = {
    name: string;
    email: string;
    inquiryType: string;
    inquiryArtist: string;
    message: string;
}

type Socials = {
    social: string,
    link: string
}

export type Collections = {
    name: string;
    image: string;
    spotifyEmbedded: string;
}

export interface ArtistProps {
    id: number;  
    artistName: string;
    desc: string;
    artistTitles: string[];
    socials: Socials[];
    albums: Collections[];
    eps: Collections[];
    singles: Collections[];
    landscapeImage: string;
    portraitImage: string;
}

export interface HomeArtistProps { 
    artistName: string;
    artistTitles: string[];
    albums: Collections[];
    eps: Collections[];
    singles: Collections[];
    landscapeImage: string;
}

export type Cursor = { 
    x: number;
    y: number;
    isHovered?: boolean;
    children: React.ReactNode,
    className: string
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

export type GalleryImagesProps = {
    id: number;
    image: StaticImageData;
}

export type GalleryProps = {
    image: StaticImageData;
}

