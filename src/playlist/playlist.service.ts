import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';


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
}