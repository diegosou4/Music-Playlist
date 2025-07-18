import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePlaylistDto } from '../dto/create-playlist.dto';

@Injectable()
export class PlaylistService {
    constructor(private prisma: PrismaService) {}

    async getAllPlaylists() {
        const playlists = await this.prisma.playlist.findMany();
        return playlists;
    }

    async getPlaylistById(id: string) {
        const playlist = await this.prisma.playlist.findUnique({
            where: { id: id },
        });
        if (!playlist) {
            throw new Error(`Playlist with id ${id} not found`);
        }
        return playlist;
    }
    async createPlaylist(data: CreatePlaylistDto) {
        const playlist = await this.prisma.playlist.create({
            data: {
                name : data.name,
                description : data.description,
                userId : data.userId,
            },
        });
        return playlist;
    }


    
}
