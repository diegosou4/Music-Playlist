

export class PlaylistByIdDto {
    id: string;
    name: string;
    url: string | null;
    description: string | null;
    image: string | null;
    isPublic: boolean;
    isActive: boolean;
    popularity: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user :{
        id: string;
        name: string;
        lastName: string;
    }
    tracks: {
    trackId: string;
    playlistId: string;
    track: {
        id: string;
        name: string;
        duration: number;
        url: string | null;
        popularity: number;
        genre: {
        name: string;
        };
    } | null;
}[] | null;

}

export const playlistById = {
    include: {
        user: {
            select: {
                id: true,
                name: true,
                lastName: true,
            },
        },
        tracks: {
            include: {
                track: {
                    select: {
                        id: true,
                        name: true,
                        duration: true,
                        url: true,
                        popularity: true,
                        genre: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        },
    },
};