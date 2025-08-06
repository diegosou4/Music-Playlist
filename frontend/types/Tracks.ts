


export interface ITrack {
    album : {
        name : string;
        image : string | null;
    }
    albumId: string;
    artist: {
        name: string;
        image: string | null;
    }
    createdAt: string;
    duration: number;
    genre : {
        name : string;
    }
    id : string;
    image: string | null;
    isActive: boolean;
    isPublic: boolean;
    lyrics: string | null;
    mimeType: string;
    name : string;
    popularity: number;
    updatedAt: string;
    url : string;
}