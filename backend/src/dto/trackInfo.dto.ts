

export const trackinfoDTO = {

    include: {
                        genre: {
                            select: {
                                name: true,
                            },
                        },
                        artist: {
                            select: {
                                name: true,
                                image: true,
                            },
                        },
                        album: {
                            select: {
                                name: true,
                            },
                        },
                    },
}